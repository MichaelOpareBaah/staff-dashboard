import React from "react";
import { NavLink } from "react-router";

export default function Dashboard() {
  return (
    <div>
      <div className="wrapper">
        <div className="card">
          <h4>Total Employees</h4>
          <p>10</p>
        </div>
        <div className="card">
          <h4>Total Customers</h4>
          <p>10</p>
        </div>
        <div className="card">
          <h4>Total Stock</h4>
          <p>10</p>
        </div>
      </div>
      <div className="btn-wrapper">
        <NavLink to="add-employee" className="btn">
          Add Employee
        </NavLink>
        <NavLink to="add-customers" className="btn">
          Add Customer
        </NavLink>
        <NavLink className="btn">Add Stock</NavLink>
      </div>
      <div>
        <h4>Today's Customers</h4>
      </div>
    </div>
  );
}
