import React from "react";
import { HAMBURGER_ICON, USER_ICON, YOUTUBE_ICON } from "../constant";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="col-span-1 flex justify-between">
        <img
          onClick={toggleMenuHandler}
          className="h-10 cursor-pointer "
          src={HAMBURGER_ICON}
          alt="menu"
        />
        <img className="h-12 pb-2" src={YOUTUBE_ICON} alt="youtube-logo" />
      </div>

      <div className="col-span-10 mx-5 text-center ">
        <input
          className="w-1/2 border border-gray-400 rounded-l-full"
          type="text"
        />
        <button className=" px-4 border bg-gray-100 border-gray-400 rounded-r-full">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img className="h-8" src={USER_ICON} alt="" />
      </div>
    </div>
  );
};

export default Head;
