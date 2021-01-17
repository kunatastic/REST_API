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
    res.status(500).json({ message: error });
  }
});

// GET the one subscriber
router.get("/:id", async (req, res) => {
  console.log(req.params);
  const query = {
    _id: req.params.id,
  };
  try {
    const subscriberData = await subsriberModel.find(query);
    // const subscriberData = await subsriberModel.findById(req.params.id);
    res.json(subscriberData);
  } catch (error) {
    res.json({ errorCheck: "error", message: error });
  }
});

// POST the one subscriber
router.post("/", async (req, res) => {
  const newSubscriber = new subsriberModel({
    name: req.body.name,
    subscribedChannel: req.body.subscribedChannel,
  });
  try {
    const subscriber = await newSubscriber.save();
    res.json(subscriber);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

// UPDATE  one subscriber
router.patch("/:id", async (req, res) => {
  try {
    const updateSubscriber = await subsriberModel.updateOne(
      { _id: req.body.id },
      { $set: { subscribedChannel: req.body.subscribedChannel } }
    );
    res.json(updateSubscriber);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

// DELETE  one subscriber
router.delete("/:id", async (req, res) => {
  try {
    const delSubscriber = await subsriberModel.remove({ _id: req.params.id });
    res.json(delSubscriber);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
