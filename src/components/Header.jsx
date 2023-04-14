import React, { useEffect, useState } from "react";

import Eye from "../assets/images/eye.png";

export default function Header(props) {
  console.log("In Header");
  const { name, events } = props;
  const today = new Date();
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let count = 0;
    events.forEach((event) => {
      if (event.StartTime.getDate() === today.getDate()) count++;
    });
    setCounter(count);
  }, [events]);

  return (
    <div className="m-2 w-full">
      <div className="flex justify-around items-center w-full">
        <div className="w-6/10">
          <div className="text-4xl font-bold">Good Morning {name}! 🙂</div>
          <div className="text-2xl text-gray-500">
            You have {counter} event(s) today
          </div>
        </div>
        <div className="w-3/10">
          <img src={Eye} alt="eye image" />
        </div>
      </div>
    </div>
  );
}
