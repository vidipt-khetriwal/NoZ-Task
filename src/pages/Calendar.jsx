import React from "react";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import CalendarComponent from "../components/Calendar";
import MeetingDetails from "../components/MeetingDetails";
import { useLocation } from "react-router-dom";

export default function Calendar() {
  const { state } = useLocation();
  const { name } = state;
  console.log(name);
  return (
    <div className="w-screen h-screen bg-teal flex justify-center items-center">
      <div className="w-8/10 h-8/10 bg-white rounded-5xl">
        <NavBar name={name} />
        <div className="flex w-full h-9/10">
          <div className="w-7/10 h-full">
            <Header name={name} />
            <CalendarComponent />
          </div>
          <div className="w-3/10">
            <MeetingDetails />
          </div>
        </div>
      </div>
    </div>
  );
}
