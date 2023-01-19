import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export class CdkWorkshopStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // defines an AWS Lambda resource
    const hello = new lambda.Function(this, 'HelloHandler', {
      runtime: lambda.Runtime.NODEJS_14_X, // use the node 14 runtime
      code: lambda.Code.fromAsset('lambda'), //code loaded from the lambda directory
      handler: 'hello.lambdaHandler', // file is "hello", function is "lambdaHandler"
    });
  }
}
