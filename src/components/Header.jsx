import React from "react";

import Eye from "../assets/images/eye.png";

export default function Header(props) {
  const { name } = props;
  return (
    <div className="m-2 w-full">
      <div className="flex justify-around items-center w-full">
        <div className="w-6/10">
          <div className="text-4xl font-bold">Good Morning {name}! 🙂</div>
          <div></div>
        </div>
        <div className="w-3/10">
          <img src={Eye} alt="eye image" />
        </div>
      </div>
    </div>
  );
}
