import * as pj from 'projen';
import { TrailingComma } from 'projen/lib/javascript';

const prettierAndLintOptions = {
  eslint: true,
  prettier: true,
  prettierOptions: {
    settings: {
      singleQuote: true,
      trailingComma: TrailingComma.ALL,
    },
  },
};

/**
 * The following are some better comments helper (https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)
 * * That is so important
 * ! Deprecated stuff
 * ? being used as a question
 * TODO: aha
 * @param myParam The parameter for this method
 */
const project = new pj.typescript.TypeScriptProject({
  defaultReleaseBranch: 'main',
  name: 'plant-soh',
  projenrcTs: true,
  ...prettierAndLintOptions,
});
project.prettier?.addIgnorePattern('.eslintrc.json');
project.prettier?.addIgnorePattern('tsconfig.dev.json');
project.prettier?.addIgnorePattern('tsconfig.json');
project.prettier?.addIgnorePattern('backend/cdk.json');

project.setScript(
  'deploy',
  'cd landingpage && yarn build && cd ../catalog && yarn build && cd ../backend && yarn deploy:no-approval ',
);

project.setScript(
  'dev',
  'curl https://d3oyzoc11xndeg.cloudfront.net/runtime-config.json > frontend/public/runtime-config.json && cd frontend && yarn start',
);

project.setScript('lan-dev', 'cd landingpage && yarn dev');

project.setScript('destroy', 'cd backend && yarn destroy');
project.setScript('codegen', 'cd catalog && yarn codegen');

project.package.addField('lint-staged', {
  '*.(ts|tsx)': ['eslint --fix'],
  '*.(ts|tsx|js|jsx|json)': ['prettier --write'],
});
project.setScript('lint:staged', 'lint-staged');

project.tsconfigDev?.addInclude('backend/**/*.ts');

project.synth();

const cdkVersion = '2.53.0';
const backend = new pj.awscdk.AwsCdkTypeScriptApp({
  defaultReleaseBranch: 'main',
  outdir: 'backend',
  parent: project,
  name: 'backend',
  cdkVersion,
  deps: [
    'cdk-appsync-transformer@2.0.0-alpha.0',
    'appsync-client',
    `@aws-cdk/aws-appsync-alpha@${cdkVersion}-alpha.0`,
  ],
  devDeps: [
    // '@types/fs-extra',
    // '@types/lodash',
    '@types/aws-lambda',
    // ...[
    //   'amplify-graphql-docs-generator',
    //   '@graphql-codegen/cli',
    //   '@graphql-codegen/typescript',
    //   '@graphql-codegen/typescript-operations',
    //   '@graphql-codegen/typescript-react-query',
    //   '@graphql-codegen/typed-document-node',
    // ],
  ],
  gitignore: ['appsync', './schema.graphql'],
  // release: true,
  tsconfig: {
    compilerOptions: {
      skipLibCheck: true,
    },
  },
  ...prettierAndLintOptions,
});

backend.setScript('cdk', 'cdk');
backend.setScript('tsc', 'tsc');
backend.setScript('destroy', 'cdk destroy');
// backend.setScript('postinstall', 'cd lambda && yarn install');
backend.setScript(
  'deploy:no-approval',
  'cdk deploy --require-approval never --all',
);

backend.synth();

const landingpage = new pj.web.ReactTypeScriptProject({
  defaultReleaseBranch: 'main',
  outdir: 'landingpage',
  parent: project,
  name: 'landingpage',
  deps: [
    'react-router-dom',
    'react-scripts',
    'styled-components',
    'axios',
    'react-responsive',
    'react-localization',
    'js-cookie@^3.0.1',
  ],
  devDeps: [
    '@types/styled-components',
    '@types/react-responsive',
    '@types/react-router-dom',
    '@types/js-cookie@^3.0.1',
  ],
  release: false,
  ...prettierAndLintOptions,
});

landingpage.synth();

const catalog = new pj.web.ReactTypeScriptProject({
  defaultReleaseBranch: 'main',
  outdir: 'catalog',
  parent: project,
  name: 'catalog',
  deps: [
    ...[
      '@aws-amplify/api',
      '@aws-amplify/auth',
      '@aws-amplify/ui-components',
      '@aws-amplify/ui-react',
      'aws-appsync',
      'aws-amplify',
      'aws-amplify-react',
    ],
    'react-apollo',
    'react-color',
    'react-hook-form',
    'react-konva',
    'react-plotly.js',
    '@tanstack/react-query',
    'react-responsive',
    'react-router-dom@^5.2.0',
    'react-swipeable',
    'react-tooltip',
    '@apollo/client',
    'apollo-boost',
    ...[
      '@mui/icons-material',
      '@mui/material',
      '@emotion/react',
      '@emotion/styled',
      // '@material-ui/lab@^4.0.0-alpha.61',
      // '@material-ui/pickers',
    ],
    // https://www.npmjs.com/package/material-ui-confirm
    'material-ui-confirm',
    // 'react-ga@^3.3.0',
    'styled-components',
    'use-debounce',
    '@date-io/date-fns',
    '@date-io/moment',
    'date-fns',
    'plotly.js',
    'lodash',
    'konva',
    'use-image@',
    'clsx',
    'react-zoom-pan-pinch',
    'js-cookie',
    'selenium-webdriver@^4.1.1',
    'moment',
    'stream',
  ],
  devDeps: [
    ...[
      'amplify-graphql-docs-generator@',
      '@graphql-codegen/cli',
      '@graphql-codegen/typescript',
      '@graphql-codegen/typescript-operations',
      '@graphql-codegen/typescript-react-query',
    ],
    '@graphql-codegen/typescript-react-apollo',
    '@types/react-router-dom@^5.1.7',
    '@types/styled-components',
    '@types/react-test-renderer',
    '@types/react-responsive',
    // '@types/react-query',
    'react-test-renderer',
    '@types/react-color',
    '@types/react-plotly.js',
    '@types/lodash',
    '@types/js-cookie',
    '@types/selenium-webdriver',
    'assert',
  ],
  gitignore: ['runtime-config.json'],
  release: false,
  jest: false,
  jestOptions: {
    jestConfig: {
      transform: {
        '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest',
      },
    },
  },
  // tsconfig: {
  //   compilerOptions: {
  //     noImplicitAny: true,
  //   },
  // },
  ...prettierAndLintOptions,
});

catalog.addTask('copy-schema', {
  exec: 'cp ../backend/appsync/schema.graphql ./schema.graphql',
});

catalog.addTask('generate-statements', {
  exec: 'node bin/generateStatements.js',
});

catalog.addTask('codegen', {
  description: 'Generates frontend GraphQL wrapper API code',
  exec: 'yarn run copy-schema && yarn run generate-statements && graphql-codegen --config codegen.yml && rm schema.graphql',
});

catalog.synth();
