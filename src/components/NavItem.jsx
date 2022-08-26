import React from "react";
import { Link } from "react-router-dom";

function NavItem({ to, children }) {
  return (
    <li>
      <Link to={to} className="p-2 transition opacity-[.8] hover:opacity-[1]">
        {children}
      </Link>
    </li>
  );
}

export default NavItem;
