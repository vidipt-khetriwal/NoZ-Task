import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import CalendarComponent from "../components/Calendar";
import MeetingDetails from "../components/MeetingDetails";
import { useLocation } from "react-router-dom";

export default function Calendar() {
  const { state } = useLocation();
  const { name } = state;
  const [headerKey, setHeaderKey] = useState(0);
  const [events, setEvents] = useState([
    {
      Id: 1,
      Subject: "Meeting",
      StartTime: new Date(2023, 3, 15, 10, 0),
      EndTime: new Date(2023, 3, 15, 12, 30),
      Description: "",
    },
    {
      Id: 2,
      Subject: "Task",
      StartTime: new Date(2023, 3, 14, 10, 0),
      EndTime: new Date(2023, 3, 14, 12, 0),
      Description: "",
    },
    {
      Id: 3,
      Subject: "Task",
      StartTime: new Date(2023, 3, 12, 5, 0),
      EndTime: new Date(2023, 3, 12, 6, 30),
      Description: "",
    },
    {
      Id: 4,
      Subject: "Task3",
      StartTime: new Date(2023, 3, 10, 4, 0),
      EndTime: new Date(2023, 3, 10, 6, 0),
      Description: "",
    },
    {
      Id: 5,
      Subject: "Task4",
      StartTime: new Date(2023, 3, 9, 1, 0),
      EndTime: new Date(2023, 3, 9, 3, 0),
      Description: "",
    },
  ]);

  const handleChange = (newEvents) => {
    // const temp = [...newEvents];
    setEvents(newEvents);
    setHeaderKey(headerKey + 1);
    console.log("Inside Handle Change", events);
  };

  return (
    <div className="w-screen h-screen bg-teal flex justify-center items-center">
      <div className="w-8/10 h-8/10 bg-white rounded-5xl">
        <NavBar name={name} />
        <div className="flex w-full h-9/10">
          <div className="w-7/10 h-full">
            <Header name={name} key={headerKey} events={events} />
            <CalendarComponent events={events} handleChange={handleChange} />
          </div>
          <div className="w-3/10">
            <MeetingDetails />
          </div>
        </div>
      </div>
    </div>
  );
}
