import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import NavItem from "./NavItem";
import { style } from "../utils/style";

function Navbar() {
  let { user, logOut } = useContext(AuthContext);

  return (
    <nav className="w-full p-4 bg-primary text-light shadow-md flex flex-col gap-4 justify-between items-center">
      <Link to="/" className="font-bold text-2xl">
        Qlink
      </Link>
      <ul className={`${style.flexRowCenter} gap-1`}>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/guide">Guide</NavItem>
        {user ? (
          <>
            <NavItem to="/links">Links</NavItem>
            <button
              onClick={logOut}
              className="px-4 py-2 rounded-md hover:bg-light hover:text-primary text-sm transition opacity-[.8] hover:opacity-[1]"
            >
              Sign out
            </button>
          </>
        ) : (
          <>
            <NavItem to="/login">Sign in</NavItem>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
