import React from "react";
import { useBookingsContext } from "../hooks/useBookingsContext";
import { useAuthContext } from "../hooks/useAuthContext";

// Date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const BookingDetails = ({ booking }) => {
  const { dispatch } = useBookingsContext();
  const user = useAuthContext();

  const handleClick = async () => {
    if (!user) {
      return;
    }
    const response = await fetch("/api/bookings/" + booking._id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_BOOKING", payload: json });
    }
  };

  return (
    <div className="booking-details">
      <h4>{booking.title}</h4>
      <p>
        <strong>Adults: </strong>
        {booking.load}
      </p>
      <p>
        <strong>Kids: </strong>
        {booking.reps}
      </p>
      <p>
        {formatDistanceToNow(new Date(booking.createdAt), { addSuffix: true })}
      </p>
      <span className="material-symbols-outlined" onClick={handleClick}>
        delete
      </span>
    </div>
  );
};

export default BookingDetails;
