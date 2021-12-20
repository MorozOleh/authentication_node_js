const jwt = require("jsonwebtoken");
const { BadRequestError, AuthenticatedError } = require("../errors");

const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new BadRequestError("No token");
  }

  const [_, token] = authHeader.split(" ");
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decoded;

    req.user = { id, username };
  } catch (error) {
    throw new AuthenticatedError("Not authorized to access this route", 401);
  }

  next();
};

module.exports = authenticationMiddleware;
