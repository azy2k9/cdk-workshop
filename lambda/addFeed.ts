import { DynamoDB } from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

exports.handler = async function (event: any, context: any, callback: any) {
  if (process.env.DYNAMODB === '' || !process.env.DYNAMODB) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        error: 'Cannot find DynamoDB table name'
      })
    };
  }

  if (event.body) {
    console.log({ event: event.body });
    const query = {
      TableName: process.env.DYNAMODB,
      Item: {
        id: uuidv4(),
        amount_consumed: event.body.amount_consumed,
        consumed_at: event.body.consumed_at
      }
    };

    try {
      const documentClient = new DynamoDB.DocumentClient();
      const results = await documentClient.put(query).promise();
      console.log(results);
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          data: results.$response.data
        })
      };
    } catch (error) {
      console.log('hit an error');
      console.log('hit an error');
      console.log('hit an error');
      console.log(error);
      console.log('hit an error');
      console.log('hit an error');
      console.log('hit an error');
      return {
        statusCode: 500,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: 'Error adding feed to table',
          error
        })
      };
    }
  }

  return {
    statusCode: 500,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      error: 'Error processing payload to addFeed lambda'
    })
  };
};
