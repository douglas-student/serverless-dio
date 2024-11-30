"use strict";
const AWS = require("aws-sdk");

const getItem = async (event) => {
  const { id } = event.pathParameters;

  const dynamodb = new AWS.DynamoDB.DocumentClient();

  let item;
  try {
    const result = await dynamodb.get({
      TableName: "CartTable",
      Key: { id },
    }).promise();

    item = result.Item;
  } catch (error) {
    console.log(error);
  }

  return {
    statusCode: 200,
    body: JSON.stringify(item),
  };
};

module.exports = {
  handler: getItem,
};
