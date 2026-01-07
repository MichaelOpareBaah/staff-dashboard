import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import React from "react";
import Layout from "./layout/Layout";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import AddEmployee from "./components/AddEmployee";
import AddCustomers from "./components/AddCustomers";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />}></Route>
          <Route path="customers" element={<Customers />}></Route>
          <Route path="add-employee" element={<AddEmployee />}></Route>
          <Route path="add-customers" element={<AddCustomers />}></Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
