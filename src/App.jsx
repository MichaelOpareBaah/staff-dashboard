import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import React from "react";
import Layout from "./layout/Layout";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import AddEmployee from "./components/AddEmployee";
import AddCustomers from "./components/AddCustomers";
import Sales from "./pages/Sales";
import Track from "./pages/Track";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />}></Route>
          <Route path="sales/customers" element={<Customers />}></Route>
          <Route path="add-employee" element={<AddEmployee />}></Route>
          <Route path="sales/add-customers" element={<AddCustomers />}></Route>
          <Route path="sales" element={<Sales />}></Route>
          <Route path="sales/track" element={<Track />}></Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
