import { useAuthContext } from "./useAuthContext";
import { useBookingsContext } from "./useBookingsContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: bookingsDispatch } = useBookingsContext();

  const logout = () => {
    // remove user from storage
    localStorage.removeItem("user");

    // dispatch logout action
    dispatch({ type: "LOGOUT" });
    bookingsDispatch({ type: "SET_BOOKINGS", payload: null });
  };

  return { logout };
};
