import React, { useEffect, useState } from "react";
// Components
import BookingDetails from "../components/BookingDetails";
import BookingForm from "../components/BookingForm";

const Home = () => {
  const [bookings, setBookings] = useState(null);
  useEffect(() => {
    const fetchBookings = async () => {
      const response = await fetch("/api/bookings");
      const json = await response.json();

      if (response.ok) {
        setBookings(json);
      }
    };

    fetchBookings();
  }, []);

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
