import {APIGatewayProxyEvent, APIGatewayProxyResultV2,Handler} from 'aws-lambda'
//exports.handler = async (event: APIGatewayProxyEvent) => {

export const handler: Handler = async (event: APIGatewayProxyEvent) => {
  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda! and from GitHub'),
  };
  return response;
};
