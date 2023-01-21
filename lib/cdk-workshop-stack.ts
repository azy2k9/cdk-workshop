import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as nodejs from 'aws-cdk-lib/aws-lambda-nodejs';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';

export class CdkWorkshopStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // Define a new dynomoDB table
    const table = new dynamodb.Table(this, 'FeedTable', {
      partitionKey: {
        name: 'id',
        type: dynamodb.AttributeType.STRING
      }
    });


    // defines an AWS nodejs function
    new nodejs.NodejsFunction(this, "HelloHandler", {
      entry: './lambda/hello.ts',
      handler: "handler",
      runtime: lambda.Runtime.NODEJS_16_X, // use the node 16 runtime
      bundling: {
        minify: true, externalModules: ['aws-sdk'],
      }
    });
  }
}
