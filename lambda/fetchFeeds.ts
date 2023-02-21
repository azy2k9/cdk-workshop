import { DynamoDB } from 'aws-sdk';

exports.handler = async function (event: any) {
  if (process.env.DYNAMODB === '' || !process.env.DYNAMODB) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: {
        error: 'Cannot find DynamoDB table name'
      }
    };
  }

  const query = {
    TableName: process.env.DYNAMODB
  };

  try {
    const documentClient = new DynamoDB.DocumentClient();
    const results = await documentClient.scan(query).promise();
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        data: results
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
        error: 'Error finding table results'
      })
    };
  }
};
