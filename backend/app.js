const express = require("express");
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
    app.listen(8080);
  })
  .catch((err) => {
    console.log(err);
  });
