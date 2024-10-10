import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export const Rootlayout = () => {
  return (
    <div className=" flex">
      <Sidebar />
      <Outlet />
    </div>
  );
};
