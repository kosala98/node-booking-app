import { createContext } from "react";

export const BookingContext = createContext();

export const BookingContextProvider = () => {
  return <BookingContext.Provider></BookingContext.Provider>;
};
