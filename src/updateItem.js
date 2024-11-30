"use strict";
const AWS = require("aws-sdk");

const updateItem = async (event) => {
  const { id } = event.pathParameters;
  const { quantidade, preco } = JSON.parse(event.body);

  const dynamodb = new AWS.DynamoDB.DocumentClient();

  await dynamodb.update({
    TableName: "CartTable",
    Key: { id },
    UpdateExpression: 'set quantidade = :quantidade, preco = :preco',
    ExpressionAttributeValues: {
      ':quantidade': quantidade,
      ':preco': preco,
    },
    ReturnValues: "ALL_NEW",
  }).promise();

  return {
    statusCode: 200,
    body: JSON.stringify({ msg: 'Item atualizado' }),
  };
};

module.exports = {
  handler: updateItem,
};
