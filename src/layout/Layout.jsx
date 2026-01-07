import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

export default function Layout() {
  return (
    <>
      <Header />
      <div className="layout">
        <Sidebar />
        <Outlet />
      </div>

      <Footer />
    </>
  );
}
