import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import NavItem from "./NavItem";
import { style } from "../utils/style";

function Navbar() {
  let { user, logOut } = useContext(AuthContext);

  return (
    <nav className="w-full p-4 bg-primary text-light shadow-md flex justify-between items-center">
      <Link to="/" className="font-bold text-2xl">
        QRL
      </Link>
      <ul className={`${style.flexRowCenter} gap-8`}>
        {user ? (
          <>
            <NavItem to="/links">Links</NavItem>
            <button
              onClick={logOut}
              className={`${style.button} bg-light text-dark`}
            >
              Sign out
            </button>
          </>
        ) : (
          <NavItem to="/login">Login</NavItem>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
