import React from "react";
import { Link } from "react-router-dom";

function NavItem({ to, children }) {
  return (
    <li>
      <Link
        to={to}
        className="px-4 py-2 rounded-md hover:bg-light hover:text-primary text-sm transition opacity-[.8] hover:opacity-[1] outline-none focus:ring-4 ring-light ring-offset-2 ring-offset-primary"
      >
        {children}
      </Link>
    </li>
  );
}

export default NavItem;
