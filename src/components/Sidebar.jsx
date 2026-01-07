import React from "react";
import { NavLink } from "react-router";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h3>Admin</h3>
      <p>Online</p>
      <nav className="sidebar-items">
        <NavLink to="dashboard">Dashboard</NavLink>
        <NavLink to="customers">Customers</NavLink>
      </nav>
    </div>
  );
}
