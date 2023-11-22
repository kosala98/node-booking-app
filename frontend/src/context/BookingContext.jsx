import { createContext, useReducer } from "react";

export const BookingsContext = createContext();

export const bookingsReducer = (state, action) => {
  switch (action.type) {
    case "SET_BOOKINGS":
      return {
        bookings: action.payload,
      };
    case "CREATE_BOOKING":
      return {
        bookings: [action.payload, ...state.bookings],
      };
    case "DELETE_BOOKING":
      return {
        bookings: state.bookings.filter((w) => w._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export const BookingContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bookingsReducer, {
    bookings: null,
  });

  return (
    <BookingsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </BookingsContext.Provider>
  );
};
