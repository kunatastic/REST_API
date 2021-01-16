/*
 * Subscriber's Routes
 * 1. GET all the subscribers
 * 2. GET one subscriber
 * 3. POST one subscriber or create
 * 4. PATCH an subscriber or UPDATE
 * 5. DELETE an subscriber
 */

const express = require("express");
const router = express.Router();

// Bringing back DB Schema
const subsriberModel = require("../../models/subscriber");

// GET all the subscriber
router.get("/", async (req, res) => {
  try {
    const subscriber = await subsriberModel.find();
    res.json(subscriber);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET the one subscriber
router.get("/:id", (req, res) => {
  res.send("GET THE SUBSCRIBER");
});

// POST the one subscriber
router.post("/", async (req, res) => {
  // const newSubscriber = new subsriberModel({
  //   name: req.body.name,
  //   subscribedChannel: req.body.subscribedChannel,
  // });
  // try {
  //   const subscriber = await newSubscriber.save();
  //   res.status(201).json(subscriber);
  // } catch (error) {
  //   res.status(400).json({ message: error.message });
  // }
  console.log(req.body);
});

// UPDATE  one subscriber
router.patch("/", (req, res) => {
  res.send("PATCH ONE SUBSCRIBER!");
});

// DELETE  one subscriber
router.delete("/", (req, res) => {
  res.send("DELETE ONE SUBSCRIBER!");
});

module.exports = router;
