const express = require("express");
const dotenv = require("dotenv");
const errorHandlerMiddleware = require("./middlewares/errorHandler");
const notFoundPage = require("./middlewares/notFound");
const connectDB = require("./db/connect");

const app = express();
dotenv.config();

//middlewares
app.use(notFoundPage);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 3001;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
