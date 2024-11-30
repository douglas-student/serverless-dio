"use strict";
const { v4 } = require("uuid");
const AWS = require("aws-sdk");

const addItem = async (event) => {
  const { produtoId, quantidade, preco } = JSON.parse(event.body);
  const id = v4();
  const createdAt = new Date().toISOString();

  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const newItem = {
    id,
    produtoId,
    quantidade,
    preco,
    createdAt,
  };

  await dynamodb.put({
    TableName: "CartTable",
    Item: newItem,
  }).promise();

  return {
    statusCode: 200,
    body: JSON.stringify(newItem),
  };
};

module.exports = {
  handler: addItem,
};
