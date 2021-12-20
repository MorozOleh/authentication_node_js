require("dotenv").config();
const { nanoid } = require("nanoid");

const { BadRequestError } = require("../errors");
const jwt = require("jsonwebtoken");

const login = async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new BadRequestError("Please provide username and password");
  }
  const id = nanoid();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(200).json({ message: "user created", token });
};

const dashboard = async (req, res) => {
  const { user } = req;

  res
    .status(200)
    .json({ message: `Hello ${user.username}, your id: ${user.id}` });
};

module.exports = { login, dashboard };
