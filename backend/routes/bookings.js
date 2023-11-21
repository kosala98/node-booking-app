const express = require("express");
const {
  createBooking,
  getBookings,
  getBooking,
  deleteBooking,
  updateBooking,
} = require("../controllers/bookingController");
const router = express.Router();

// GET all bookings
router.get("/", getBookings);

// GET a single booking
router.get("/:id", getBooking);

// POST a new booking
router.post("/", createBooking);

// DELETE a booking
router.delete("/:id", deleteBooking);

// UPDATE a booking
router.patch("/:id", updateBooking);

module.exports = router;
