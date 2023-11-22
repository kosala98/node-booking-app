const Booking = require("../models/BookingModel");
const mongoose = require("mongoose");

// GET all bookings
const getBookings = async (req, res) => {
  const bookings = await Booking.find({}).sort({ createdAt: -1 });

  res.status(200).json(bookings);
};

// GET a single booking
const getBooking = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid booking" });
  }

  const booking = await Booking.findById(id);

  if (!booking) {
    return res.status(404).json({ error: "Booking not found" });
  }

  res.status(200).json(booking);
};

// CREATE new booking
const createBooking = async (req, res) => {
  const { title, load, reps } = req.body;

  let emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }
  if (!load) {
    emptyFields.push("load");
  }
  if (!reps) {
    emptyFields.push("reps");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill all the fields ", emptyFields });
  }

  // Add document to DB
  try {
    const booking = await Booking.create({ title, load, reps });
    res.status(200).json(booking);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE a booking
const deleteBooking = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid booking" });
  }

  const booking = await Booking.findOneAndDelete({ _id: id });

  if (!booking) {
    return res.status(400).json({ error: "Booking not found" });
  }

  res.status(200).json(booking);
};

// UPDATE a booking
const updateBooking = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid booking" });
  }

  const booking = await Booking.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!booking) {
    return res.status(400).json({ error: "Booking not found" });
  }

  res.status(200).json(booking);
};

module.exports = {
  getBookings,
  getBooking,
  createBooking,
  deleteBooking,
  updateBooking,
};
