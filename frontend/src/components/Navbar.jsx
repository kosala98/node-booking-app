import React from "react";
import { Link } from "react-router-dom";
import ClassIcon from "@mui/icons-material/Class";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>
            Easy Booking <ClassIcon fontSize="large" />
          </h1>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
