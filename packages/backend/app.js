const bodyParser = require("body-parser");
const { connectToMongoDB } = require("./database/connectToDB");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
const express = require("express");
require("dotenv").config();
const { getDate, welcomeMessage } = require("./util/landingPageMessages");
const userRoute = require("./routes/users/userRoute");
const subscriberRoute = require("./routes/subscriptions/subscriberRoute");
const uploadFileRoute = require("./routes/uploads/fileUploadRoute");
const app = express();

connectToMongoDB();
originUrl =
  process.env.NODE_ENV === "PRODUCTION"
    ? process.env.FRONTEND_PROD_URL
    : process.env.FRONTEND_LOCAL_URL;

// THIRD PARTY MIDDLEWARE
// Credit: @ https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/
// Any further modifications and errors are mine and mine alone.

//Cors policies looks well defined. I would consider using helmet.js to also add Content-Security-Policy headers. 

app.use(
  cors({
    credentials: true,
    preflightContinue: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    origin: originUrl,
    allowedHeaders: [
      "X-Api-Key",
      "X-Requested-With",
      "Content-Type",
      "Accept",
      "Authorization",
      "Access-Control-Allow-Origin",
      "Access-Control-Allow-Credentials",
    ],
  })
);

app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());

// HOMEPAGE GET ROUTE
app.get("/", (_request, response) => {
  response.json({
    message: welcomeMessage() + " " + getDate(),
  });
});

// USER || SUBSCIBER || UPLOAD ROUTES
app.use("/", userRoute);
app.use("/", subscriberRoute);
app.use("/", uploadFileRoute);

module.exports = app;
