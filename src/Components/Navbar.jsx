import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { NewsContext } from "../context/NewsContext";
import { Sparkles } from "lucide-react"; // or any icon library

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const { setText, text } = useContext(NewsContext);
  const handleClick = () => {
    setClicked(!clicked);
  };

   const location = useLocation();

   const isChatRoute = location.pathname === "/chat";

  return (
    <div className={`bg-white dark:bg-gray-900 text-black dark:text-white w-full shadow-xl ${isChatRoute? "sticky top-0 z-50" : ""}` }>
      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden p-4">
        {clicked && (
          <div className="bg-gray-200 dark:bg-gray-800 w-[180px] rounded-lg p-4 shadow-lg">
            <div className="flex justify-end">
              <button className="text-2xl" onClick={handleClick}>
                ✂️
              </button>
            </div>
            <div className="flex flex-col space-y-2 mt-4 ml-2">
              <Link className="hover:underline" to="/">
                Home
              </Link>

              <Link to="/">
                <span
                  onClick={(event) => setText(event.target.textContent)}
                  className=" cursor-pointer hover:underline"
                >
                  All
                </span>
              </Link>
              <Link to="/">
                <span
                  onClick={(event) => setText(event.target.textContent)}
                  className=" cursor-pointer hover:underline"
                >
                  Technology
                </span>
              </Link>
              <Link to="/">
                <span
                  onClick={(event) => setText(event.target.textContent)}
                  className=" cursor-pointer hover:underline"
                >
                  Business
                </span>
              </Link>
              <Link to="/">
                <span
                  onClick={(event) => setText(event.target.textContent)}
                  className=" cursor-pointer hover:underline"
                >
                  Entertainment
                </span>
              </Link>
              <Link to="/">
                <span
                  onClick={(event) => setText(event.target.textContent)}
                  className=" cursor-pointer hover:underline"
                >
                  Sports
                </span>
              </Link>
              <Link to="/">
                <span
                  onClick={(event) => setText(event.target.textContent)}
                  className=" cursor-pointer hover:underline"
                >
                  Science
                </span>
              </Link>

              <div className="flex justify-center items-center w-full">
                <Link
                  to="/chat"
                  className="inline-flex items-center gap-2 px-6 py-2 font-semibold text-white bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200 dark:from-purple-600 dark:to-indigo-700"
                >
                  <Sparkles size={18} className="text-white" />
                  Ask AI Assistant
                </Link>
              </div>
            </div>
            <div className="ml-2 mt-4">
              <Button
                variant="text"
                style={{
                  backgroundColor: "rgb(139, 92, 246)", // violet-500
                  color: "white",
                  borderRadius: "50%",
                  minWidth: "40px",
                  height: "40px",
                }}
                onClick={() => {
                  document.documentElement.classList.toggle("dark");
                }}
              >
                🌙
              </Button>
            </div>
          </div>
        )}

        {/* Hamburger Icon */}
        {!clicked && (
          <button className="text-3xl" onClick={handleClick}>
            ☰
          </button>
        )}
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-between px-10 py-4 ">
        <div className="text-2xl">📰</div>
        <div className="flex gap-10">
          <Link className="hover:underline" to="/">
            Home
          </Link>
          <Link to="/">
            <span
              onClick={(event) => setText(event.target.textContent)}
              className=" cursor-pointer hover:underline"
            >
              All
            </span>
          </Link>

          <Link to="/">
            <span
              onClick={(event) => setText(event.target.textContent)}
              className=" cursor-pointer hover:underline"
            >
              Technology
            </span>
          </Link>

          <Link to="/">
            <span
              onClick={(event) => setText(event.target.textContent)}
              className=" cursor-pointer hover:underline"
            >
              Business
            </span>
          </Link>

          <Link to="/">
            <span
              onClick={(event) => setText(event.target.textContent)}
              className=" cursor-pointer hover:underline"
            >
              Entertainment
            </span>
          </Link>
          <Link>
            <span
              onClick={(event) => setText(event.target.textContent)}
              className=" cursor-pointer hover:underline"
            >
              Sports
            </span>
          </Link>

          <Link>
            <span
              onClick={(event) => setText(event.target.textContent)}
              className=" cursor-pointer hover:underline"
            >
              Science
            </span>
          </Link>

          <div className="flex justify-center items-center w-full">
            <Link
              to="/chat"
              className="inline-flex items-center gap-2 px-6 py-2 font-semibold text-white bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200 dark:from-purple-600 dark:to-indigo-700"
            >
              <Sparkles size={18} className="text-white" />
              Ask AI Assistant
            </Link>
          </div>
        </div>
        <div>
          <Button
            variant="text"
            style={{
              backgroundColor: "rgb(139, 92, 246)",
              color: "white",
              borderRadius: "50%",
              minWidth: "40px",
              height: "40px",
            }}
            onClick={() => {
              document.documentElement.classList.toggle("dark");
            }}
          >
            🌙
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
