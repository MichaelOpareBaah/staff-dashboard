import React from "react";
import { NavLink } from "react-router";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h3>Admin</h3>
      <p>Online</p>
      <nav className="sidebar-items">
        <NavLink to="/">Main Dashboard</NavLink>
        <NavLink to="customers">Estimation & Quantity</NavLink>
        <NavLink to="sales">Sales & Marketing </NavLink>
        <NavLink to="customers">Finance & Audit</NavLink>
        <NavLink to="customers">Admin & HR</NavLink>
        <NavLink to="customers"> Production</NavLink>
      </nav>
    </div>
  );
}
