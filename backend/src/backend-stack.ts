import * as cdk from 'aws-cdk-lib';

import { Construct } from 'constructs';
import { CatalogStack } from './catalog-stack';
import { LandingPageStack } from './landingpage-stack';

interface BackendStackProps extends cdk.StageProps {
  stage: 'prod' | 'dev';
}

export class BackendStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: BackendStackProps) {
    super(scope, id, props);
    const domainName = `${
      props.stage === 'prod' ? '' : props.stage + '.'
    }senjuns.com`;

    new CatalogStack(this, 'CatalogStack', {
      stage: props.stage,
      domainName,
    });

    new LandingPageStack(this, 'LandingPageStack', { domainName });
  }
}
