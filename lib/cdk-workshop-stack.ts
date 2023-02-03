import { RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as nodejs from 'aws-cdk-lib/aws-lambda-nodejs';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';

export class CdkWorkshopStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // Define a new dynomoDB table
    const feedTable = new dynamodb.Table(this, 'FeedTable', {
      partitionKey: {
        name: 'id',
        type: dynamodb.AttributeType.STRING
      },
      removalPolicy: RemovalPolicy.DESTROY
    });

    // defines an AWS nodejs function
    const fetchFeedsHandler = new nodejs.NodejsFunction(this, 'fetchFeeds', {
      entry: './lambda/fetchFeeds.ts',
      handler: 'handler',
      runtime: lambda.Runtime.NODEJS_16_X, // use the node 16 runtime
      bundling: {
        minify: true,
        externalModules: ['aws-sdk']
      },
      environment: {
        DYNAMODB: feedTable.tableName
      },
      architecture: lambda.Architecture.ARM_64
    });

    feedTable.grantReadWriteData(fetchFeedsHandler.role!);

    const rootApi = new apigateway.RestApi(this, 'feed-api', {
      deployOptions: {
        dataTraceEnabled: true,
        tracingEnabled: true
      }
    });

    const feedsEndpoint = rootApi.root.addResource('feeds');

    const getFeeds = feedsEndpoint.addMethod(
      'GET',
      new apigateway.LambdaIntegration(fetchFeedsHandler)
    );
  }
}
