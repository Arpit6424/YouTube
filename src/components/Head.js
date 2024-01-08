import React, { useEffect, useState } from "react";
import {
  HAMBURGER_ICON,
  USER_ICON,
  YOUTUBE_ICON,
  YOUTUBE_SEARCH_API,
} from "../constant";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    // API call
    //make an api call after every key press
    // but if the difference between 2 API call is <200ms
    // decline the API call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    dispatch(cacheResults({ [searchQuery]: json[1] }));
    setSuggestions(json[1]);
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className=" grid grid-flow-col p-5 m-2 shadow-lg">
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
        <div>
          <input
            className="w-1/2 px-4 border border-gray-400 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={(e) => setShowSuggestions(true)}
            onBlur={(e) => setShowSuggestions(false)}
          />
          <button className=" px-4 border bg-gray-100 border-gray-400 rounded-r-full">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div
            className="fixed   bg-white py-2 w-64 ml-24  md:ml-64 md:w-[36rem]  text-left rounded-lg shadow-lg border border-gray-100
        "
          >
            <ul>
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  className="px-3 py-1 shadow-sm cursor-pointer"
                >
                  🔍 {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img className="h-8" src={USER_ICON} alt="" />
      </div>
    </div>
  );
};

export default Head;
