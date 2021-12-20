const BadRequestError = require("./bad-request");
const AuthenticatedError = require("./unauthenticated");
const CustomAPIError = require("./custom-error");

module.exports = {
  BadRequestError,
  AuthenticatedError,
  CustomAPIError,
};
