"use strict";
const AWS = require("aws-sdk");

const removeItem = async (event) => {
  const { id } = event.pathParameters;

  const dynamodb = new AWS.DynamoDB.DocumentClient();

  await dynamodb.delete({
    TableName: "CartTable",
    Key: { id },
  }).promise();

  return {
    statusCode: 200,
    body: JSON.stringify({ msg: 'Item removido' }),
  };
};

module.exports = {
  handler: removeItem,
};
