import React, { useEffect } from "react";
import { useBookingsContext } from "../hooks/useBookingsContext";
import { useAuthContext } from "../hooks/useAuthContext";

// Components
import BookingDetails from "../components/BookingDetails";
import BookingForm from "../components/BookingForm";

const Home = () => {
  const { bookings, dispatch } = useBookingsContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchBookings = async () => {
      const response = await fetch("/api/bookings", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_BOOKINGS", payload: json });
      }
    };

    if (user) {
      fetchBookings();
    }
  }, [dispatch, user]);

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
