import React from "react";
import { Link } from "react-router-dom";
import {
  IoMdArrowDroprightCircle,
  IoMdArrowDropleftCircle,
} from "react-icons/io";
export const Pagination = ({
  gamesPerPage,
  totalGames,
  currentPage,
  paginate,
}) => {
  const gameNumbers = [];
  for (let i = 1; i <= Math.ceil(totalGames / gamesPerPage); i++) {
    gameNumbers.push(i);
  }
  return (
    <div className="flex items-center justify-center">
      <div className="border rounded-2xl shadow-inner flex items-center justify-center px-4 py-4">
        <ul className="m-2 flex items-center">
          <li>
            <navLink
              className="text-xl"
              to={currentPage - 1}
              onClick={() => {
                if (currentPage > 1) {
                  paginate(currentPage - 1);
                }
              }}
              aria-label="Previous"
            >
              <p>
                <span aria-hidden="true" className="text-2xl mr-3 block">
                  <IoMdArrowDropleftCircle />
                </span>
                <span className="sr-only">Previous</span>
              </p>
            </navLink>
          </li>
          {gameNumbers.map((number) => (
            <li
              key={number}
              className={`w-6 h-6  flex items-center justify-center mx-2 rounded-full text-sm font-semibold  ${
                currentPage === number
                  ? "bg-orange-500 text-white"
                  : "text-gray-500"
              }`}
            >
              <a href="!#" onClick={() => paginate(number)}>
                {number}
              </a>
            </li>
          ))}

          <li>
            <navLink
              className="text-xl"
              to={currentPage + 1}
              onClick={() => {
                if (currentPage < gameNumbers.length) {
                  paginate(currentPage + 1);
                }
              }}
              aria-label="Previous"
            >
              <p>
                <span aria-hidden="true" className="text-2xl block ml-3">
                  <IoMdArrowDroprightCircle />
                </span>
                <span className="sr-only">Next</span>
              </p>
            </navLink>
          </li>
        </ul>
      </div>

      <div className="ml-2 md:ml-8 space-x-2 flex">
        <span className="w-4 h-4 block bg-green-400 rounded-full"></span>
        <span className="w-4 h4 block bg-amber-400 rounded-full"></span>
        <span className="w-4 h4  block bg-red-400 rounded-full"></span>
      </div>
    </div>
  );
};
