/*
 *
 * Steps in Server.js
 * 1. IMPORT express and setup listen
 * 2. SET ROUTES and import
 * 3. SET UP DB
 * 4. Making and setting up a schema
 *
 */

// Import Express
const express = require("express");
const app = express();

// dotenv
require("dotenv").config();
const PORT = process.env.PORT || 1234;

// importing routes
const indexRoutes = require("./routes/index");
const subscriberRoutes = require("./routes/Subscribers/subscriber");
app.use("/", indexRoutes);
app.use("/subscriber", subscriberRoutes);

// CONFIG DB
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("open", () => console.log("DB Connected!!"));
db.on("error", (error) => console.error(error));

// Express only accepts JSON
app.use(express.json());

// Listening
app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server running at port ${PORT}`);
});
