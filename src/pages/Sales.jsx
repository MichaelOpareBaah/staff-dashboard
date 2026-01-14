import React from "react";
import { NavLink } from "react-router";

export default function Sales() {
  return (
    <div>
      <div className="wrapper">
        <div className="card">
          <h4>Total Clients</h4>
          <p>10</p>
        </div>
        <div className="card">
          <h4>Pending Orders</h4>
          <p>10</p>
        </div>
        <div className="card">
          <h4>Monthly Sales</h4>
          <p>10</p>
        </div>
      </div>
      <div className="btn-wrapper">
        <NavLink to="add-customers" className="btn">
          Add New Client
        </NavLink>
        <NavLink to="#" className="btn">
          Clients Data
        </NavLink>
        <NavLink className="btn" to="track">
          Track Order Status
        </NavLink>
      </div>
      <div>
        <h4>Today's Customers</h4>
      </div>
    </div>
  );
}
