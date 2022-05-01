const express = require("express");
const connectDB = require("./connect");
const cors = require("cors");
const env = require("dotenv");
const routes = require("./routes");
const ErrorRespMiddleware = require("./middleware/ErrorResponse");

env.config();

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

routes.forEach((rt) => app.use(rt.path, rt.route));

app.use(ErrorRespMiddleware);

const StartApp = async () => {
  await connectDB(process.env.DBURL);
  app.listen(process.env.port, () =>
    console.log("server started..." + process.env.port)
  );
};

StartApp();
