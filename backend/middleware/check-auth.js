// now, where to attach the tokens
// we can have multiple options like body, query para-meters, headers
// and we'll go with HEADERS
const jwt = require("jsonwebtoken");
const HttpError = require("../models/http-error");
const dotenv = require("dotenv");
dotenv.config();

module.exports = (req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }
  try {
    const token = req.headers.authorization.split(" ")[1]; // actually token will be present as "Bearer TOKEN", that's why we're splitting it
    if (!token) {
      throw new Error("Authentication failed!");
    }
    // now we need to verify the token
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.userData = {
      // add some data to request
      userId: decodedToken.userId,
    };
    next(); // letting request to travel to next middleware/routes
  } catch (err) {
    const error = new HttpError("Authentication Failed", 403);
    return next(error);
  }
};
