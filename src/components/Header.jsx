import React from "react";
import { NavLink } from "react-router";

export default function Header() {
  return (
    <div className="navbar">
      <div>
        <h1>ECOGLASS COMPANY LIMITED</h1>
      </div>
      <div className="navbar-sub">
        <NavLink>Admin</NavLink>
      </div>
    </div>
  );
}
