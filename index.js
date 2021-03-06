require("dotenv").config();
require("express-async-errors");
const express = require("express");
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");
const connectDB = require("./db/connection");
const mainRouter = require("./routers/main");

const PORT = process.env.PORT || 5500;

const app = express();

//* middleware
app.use(express.json());
app.use(express.static("./public"));

//* routers
app.use("/api/v1", mainRouter);

//* handlers for rest routes
app.use(notFound);
app.use(errorHandler);

//* start the server;
const start = async () => {
  try {
    await connectDB(process.env.DATABASE_URI);
    app.listen(PORT, () => {
      console.log(`server is working under ${PORT} port`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
