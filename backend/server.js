require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bookingRoutes = require("./routes/bookings");
const userRoutes = require("./routes/user");

// Declare exress app
const app = express();

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use("/api/bookings", bookingRoutes);
app.use("/api/user", userRoutes);

// Connect to DB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    // Liste for request
    app.listen(process.env.PORT, () => {
      console.log(
        "DB Connected & Server is listening on port",
        process.env.PORT
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
