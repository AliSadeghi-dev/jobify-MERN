require("express-async-errors");
const express = require("express");
const dotenv = require("dotenv");
const errorHandlerMiddleware = require("./middlewares/errorHandler");
const notFoundPage = require("./middlewares/notFound");
const morgan = require("morgan");
const connectDB = require("./db/connect");
const { AllRoutes } = require("./router");

const app = express();
dotenv.config();
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/v1", AllRoutes);

//middlewares
app.use(errorHandlerMiddleware);
app.use(notFoundPage);

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
