const express = require("express");
const Booking = require("../models/BookingModel");

const router = express.Router();

// GET all bookings
router.get("/", (req, res) => {
  res.json({ msg: "Get all bookings" });
});

// GET a single booking
router.get("/:id", (req, res) => {
  res.json({ msg: "GET a single booking" });
});

// POST a new booking
router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;

  try {
    const booking = await Booking.create({ title, load, reps });
    res.status(200).json(booking);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE a booking
router.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE a booking" });
});

// UPDATE a booking
router.patch("/:id", (req, res) => {
  res.json({ msg: "UPDATE a booking" });
});

module.exports = router;
