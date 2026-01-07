import React from "react";

export default function AddCustomers() {
  return (
    <div>
      <h4>Add New Customer</h4>
      <form>
        <div className="flex-row">
          <div className="flex-col">
            <label>Fullname *</label>
            <input type="text" placeholder="Michael Opare" className="input" />
          </div>
          <div className="flex-col">
            <label>Email *</label>
            <input
              type="email"
              placeholder="mike@example.com"
              className="input"
            />
          </div>
        </div>
        <div className="flex-row">
          <div className="flex-col">
            <label>Phone *</label>
            <input type="tel" placeholder="0500000000" className="input" />
          </div>
          <div className="flex-col">
            <label>Gender *</label>
            <select name="gender" id="gender" required className="input">
              <option value="">-- Select an option --</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
        <div className="flex-row">
          <div className="flex-col">
            <label>Specifications *</label>
            <input
              type="text"
              placeholder="Describe what the customer wants"
              className="input"
            />
          </div>
          <div className="flex-col">
            <label>Assign To *</label>
            <select name="assignTo" id="assignTo" required className="input">
              <option value="">-- Select an option --</option>
              <option value="female">Manager</option>
              <option value="male">Designer</option>
              <option value="female">Sales</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
}
