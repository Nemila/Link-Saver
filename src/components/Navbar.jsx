import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import NavItem from "./NavItem";

function Navbar() {
  let { user, logOut } = useContext(AuthContext);

  return (
    <nav className="w-full p-4 bg-primary text-light shadow-md flex justify-between items-center">
      <Link to="/" className="font-bold text-2xl">
        QRL
      </Link>
      <ul className="flex gap-8 justify-center items-center">
        {user ? (
          <>
            <NavItem to="/links">Links</NavItem>
            <button
              onClick={logOut}
              className="px-4 py-2 bg-light text-dark rounded-md"
            >
              Sign out
            </button>
          </>
        ) : (
          <>
            <NavItem to="/login">Join</NavItem>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
