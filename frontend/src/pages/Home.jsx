import React, { useEffect } from "react";
import { useBookingsContext } from "../hooks/useBookingsContext";

// Components
import BookingDetails from "../components/BookingDetails";
import BookingForm from "../components/BookingForm";

const Home = () => {
  const { bookings, dispatch } = useBookingsContext();
  useEffect(() => {
    const fetchBookings = async () => {
      const response = await fetch("/api/bookings");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_BOOKINGS", payload: json });
      }
    };

    fetchBookings();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="workouts">
        {bookings &&
          bookings.map((booking) => (
            <BookingDetails key={booking._id} booking={booking} />
          ))}
      </div>
      <BookingForm />
    </div>
  );
};

export default Home;
