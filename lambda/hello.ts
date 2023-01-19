import { Context, APIGatewayProxyCallback, APIGatewayEvent } from 'aws-lambda';

export const lambdaHandler = (
  event: APIGatewayEvent,
  _: Context,
  callback: APIGatewayProxyCallback
) => {
  console.log('request: ', JSON.stringify(event, undefined, 2));
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      message: 'hello world',
    }),
  });
};
