import React from "react";

const BookingDetails = ({ booking }) => {
  return (
    <div className="workout-details">
      <h4>{booking.title}</h4>
      <p>
        <strong>Adults: </strong>
        {booking.load}
      </p>
      <p>
        <strong>Kids: </strong>
        {booking.reps}
      </p>
      <p>{booking.createdAt}</p>
    </div>
  );
};

export default BookingDetails;
