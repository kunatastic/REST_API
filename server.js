/*
 *
 * Steps in Server.js
 * 1. IMPORT express and setup listen
 * 2. SET ROUTES and import
 * 3. SET UP DB
 * 4. Making and setting up a schema
 * 5. If using POST use body-parser
 *
 */

// Import Express
const express = require("express");
const app = express();

// dotenv
require("dotenv").config();
const PORT = process.env.PORT || 1234;

// bodyParsing
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CORS
const cors = require("cors");
app.use(cors);

// importing routes
const indexRoutes = require("./routes/index");
const subscriberRoutes = require("./routes/Subscribers/subscriber");
app.use("/", indexRoutes);
app.use("/subscriber", subscriberRoutes);

// CONFIG DB
const mongoose = require("mongoose");
mongoose.connect(
  process.env.MONGO_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  (err) => {
    if (err) throw err;
    console.log("DB Connected!!");
  }
);

// Express only accepts JSON
app.use(express.json());

// Listening
app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server running at port ${PORT}`);
});
