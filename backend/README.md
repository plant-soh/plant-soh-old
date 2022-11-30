# backend

## CDK

### Bootstrap

Get AWS environment credentials

```bash
ACCOUNT_DEV_ID=111
yarn cdk bootstrap aws://$ACCOUNT_DEV_ID/us-east-1

ACCOUNT_STAGING_ID=222
yarn cdk bootstrap aws://$ACCOUNT_STAGING_ID/us-east-1 --cloudformation-execution-policies arn:aws:iam::aws:policy/AdministratorAccess --trust $ACCOUNT_DEV_ID --trust-for-lookup $ACCOUNT_DEV_ID

ACCOUNT_ROOT_ID=333
yarn cdk bootstrap aws://$ACCOUNT_ROOT_ID/us-east-1 --cloudformation-execution-policies arn:aws:iam::aws:policy/AdministratorAccess --trust $ACCOUNT_DEV_ID
```

## Cognito

Get temporary CLI credentials via AWS SSO.

Create User

```bash
export AWS_DEFAULT_REGION=eu-central-1
STAGE=dev
USER_POOL_ID=$(aws cloudformation describe-stacks --stack-name ${STAGE:-dev}-BackendStack --output text --query "Stacks[0].Outputs[?OutputKey=='UserPoolId'].OutputValue")

USER_NAME=damadden88@googlemail.com
USER_PASSWORD=Damadden88@googlemail.com

aws cognito-idp admin-create-user --user-pool-id $USER_POOL_ID --username $USER_NAME --user-attributes Name=email,Value=$USER_NAME --output text
aws cognito-idp admin-set-user-password --user-pool-id $USER_POOL_ID --username $USER_NAME --password $USER_PASSWORD  --permanent --output text
```