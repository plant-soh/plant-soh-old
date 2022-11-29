import { App } from 'aws-cdk-lib';
import { BackendStack } from './backend-stack';

// for development, use account/region from cdk cli
const devEnv = {
  account: '981237193288',
  region: 'eu-central-1',
};

const app = new App();

new BackendStack(app, 'BackendStack', { env: devEnv, stage: 'dev' });

app.synth();
