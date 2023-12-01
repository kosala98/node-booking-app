const express = require("express");
const {
  createBooking,
  getBookings,
  getBooking,
  deleteBooking,
  updateBooking,
} = require("../controllers/bookingController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// require auth for all booking routes
router.use(requireAuth);

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
