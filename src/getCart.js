"use strict";
const AWS = require("aws-sdk");

const getCart = async () => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  let items;
  try {
    const results = await dynamodb.scan({
      TableName: "CartTable",
    }).promise();

    items = results.Items;
  } catch (error) {
    console.log(error);
  }

  return {
    statusCode: 200,
    body: JSON.stringify(items),
  };
};

module.exports = {
  handler: getCart,
};
