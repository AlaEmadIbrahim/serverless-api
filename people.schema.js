"use strict";

const dynamoose = require("dynamoose");
const contactsSchema = new dynamoose.Schema({
  id: String,
});
module.exports = dynamoose.model("people", contactsSchema);
