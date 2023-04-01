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
  'cd landingpage && yarn build && cd ../stueli && yarn build && cd ../backend && yarn deploy:no-approval ',
);

project.setScript('dev', 'cd stueli && yarn dev');

project.setScript('lan-dev', 'cd landingpage && yarn dev');

project.setScript('destroy', 'cd backend && yarn destroy');
project.setScript(
  'codegen',
  'cd backend && yarn synth && cd ../stueli && yarn codegen',
);

project.package.addField('lint-staged', {
  '*.(ts|tsx)': ['eslint --fix'],
  '*.(ts|tsx|js|jsx|json)': ['prettier --write'],
});
project.setScript('lint:staged', 'lint-staged');

project.tsconfigDev?.addInclude('backend/**/*.ts');

project.synth();

const cdkVersion = '2.54.0';
const backend = new pj.awscdk.AwsCdkTypeScriptApp({
  defaultReleaseBranch: 'main',
  outdir: 'backend',
  parent: project,
  name: 'backend',
  cdkVersion,
  deps: [
    'esbuild@^0',
    'cdk-appsync-transformer@2.0.0-alpha.0',
    'appsync-client',
    `@aws-cdk/aws-appsync-alpha@${cdkVersion}-alpha.0`,
    ...[
      'amplify-graphql-docs-generator',
      '@graphql-codegen/add',
      '@graphql-codegen/cli',
      '@graphql-codegen/typescript',
      '@graphql-codegen/typescript-operations',
      '@graphql-codegen/typescript-react-query',
      '@graphql-codegen/typescript-react-apollo',
      '@graphql-codegen/typed-document-node',
    ],
    'thenby',
  ],
  devDeps: ['aws-sdk', '@types/aws-lambda'],
  gitignore: ['appsync', './schema.graphql'],
  // release: true,
  tsconfig: {
    compilerOptions: {
      rootDir: undefined,
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
    ...['tailwindcss', 'postcss', 'autoprefixer'],
  ],
  release: false,
  ...prettierAndLintOptions,
});

landingpage.synth();

const stueli = new pj.web.ReactTypeScriptProject({
  defaultReleaseBranch: 'main',
  outdir: 'stueli',
  parent: project,
  name: 'stueli',
  deps: [
    ...[
      'amazon-cognito-identity-js',
      '@aws-amplify/auth',
      '@aws-amplify/core',
      '@aws-amplify/storage',
      '@aws-amplify/ui-react',
      '@aws-amplify/api',
      'aws-appsync',
      'aws-amplify',
      'aws-amplify-react',
    ],
    ...['@aws-sdk/types'],
    ...[
      'amplify-graphql-docs-generator',
      '@graphql-codegen/add',
      '@graphql-codegen/cli',
      '@graphql-codegen/typescript',
      '@graphql-codegen/typescript-operations',
      '@graphql-codegen/typescript-react-query',
      '@graphql-codegen/typescript-react-apollo',
      '@graphql-codegen/typed-document-node',
      '@graphql-typed-document-node/core',
    ],
    'classnames',
    'papaparse',
    'react-apollo',
    'react-color',
    'react-hook-form',
    'react-konva',
    'react-plotly.js',
    '@tanstack/react-query',
    'react-responsive',
    'react-router-dom',
    'react-swipeable',
    'react-tooltip',
    '@apollo/client',
    'apollo-boost',
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
    'moment',
    'stream',
    'thenby',
    '@tanstack/react-table',
    'reakit',
    'react-aria',
    'react-icons',
    'react-virtual',
  ],
  devDeps: [
    // '@types/react-router-dom',
    '@types/papaparse',
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
    'sass',
    ...['tailwindcss', 'postcss', 'autoprefixer'],
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

stueli.addTask('copy-schema', {
  exec: 'cp ../backend/appsync/schema.graphql ./schema.graphql',
});

stueli.addTask('generate-statements', {
  exec: 'node bin/generateStatements.js',
});

stueli.addTask('codegen', {
  description: 'Generates frontend GraphQL wrapper API code',
  exec: 'yarn run copy-schema && yarn run generate-statements && graphql-codegen --config codegen.yml && rm schema.graphql',
});

stueli.setScript(
  'dev',
  'URL=$(aws cloudformation describe-stacks --stack-name ${STAGE:-dev}-BackendStack --output text --query "Stacks[0].Outputs[?OutputKey==\'StueliWebsiteCloudfrontDomainName\'].OutputValue") && curl https://$URL/runtime-config.json > public/runtime-config.json && react-scripts start',
);

stueli.synth();
