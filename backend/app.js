const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const placesRoutes = require("./routes/places-routes");
const usersRoutes = require("./routes/users-routes");
const HttpError = require("./models/http-error");

const app = express();

app.use(bodyParser.json());
// basically for POST REQUESTS, it'll pick data from the body and pass it to
//next middleware which we can use

// for handling CORS error (enforced by browsers), basically setting some specific 3 headers (origin, headers, methods) to the request
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // tells which domain should have access and * means any domain
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  ); // incoming requests with these headers will be allowed
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

app.use("/api/places", placesRoutes);
app.use("/api/users", usersRoutes);

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);

  throw error;
});

// adding error handling middleware, mainly for handling unknown request/paths
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred." });
});

// where to use the mongoose, it's better to start the server if we're connected to DB otherwise not
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(
      process.env.SERVER_PORT,
      console.log(`server running on port ${process.env.SERVER_PORT}`)
    );
  })
  .catch((err) => {
    console.log(err);
  });
