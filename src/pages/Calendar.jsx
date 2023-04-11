import React from "react";
import NavBar from "../components/NavBar";
import { useLocation } from "react-router-dom";

export default function Calendar() {
  const { state } = useLocation();
  const { name } = state;
  console.log(name);
  return (
    <div>
      <NavBar />
      Calendar
    </div>
  );
}
