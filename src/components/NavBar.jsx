import React from "react";
import Search from "../assets/icons/search.svg";
import DownArrow from "../assets/icons/downArrow.png";
import ProfileImage from "../assets/images/profileImage.png";
import Notification from "../assets/icons/notification.png";

export default function NavBar(props) {
  const { name } = props;
  return (
    <div className="p-4 border-b-2 border-b-grey border-b-solid w-full">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center mx-4 w-4/10">
          <div className="w-1/10">
            <img src={Search} alt="search" className="w-1/2" />
          </div>
          <div className="w-8/10">
            <input
              type="text"
              placeholder="Search for an event"
              className="w-full outline-none"
            />
          </div>
        </div>
        <div className="w-2/10 flex items-center mx-2">
          <div className="w-5/100 mx-1">
            <img src={DownArrow} alt="down-arrow" />
          </div>
          <div className="mx-4">{name}</div>
          <div className="w-15/100">
            <img
              src={ProfileImage}
              alt="profile-image"
              className="rounded-full"
            />
          </div>
          <div className="w-1/10 mx-4">
            <img src={Notification} alt="notification" className="" />
          </div>
        </div>
      </div>
    </div>
  );
}
