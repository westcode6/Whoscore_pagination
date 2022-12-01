import React from "react";
import "animate.css";
export const Games = ({ games, loading }) => {
  if (loading) {
    return <h2>Loading....</h2>;
  }
  return (
    <div className="md:px-20 py-2 rounded-2xl w-full flex flex-col items-center justify-center">
      {games.map((games) => (
        <div
          key={games.id}
          className="w-full shadow-inner bg-teal-50 rounded-2xl py-10 animate__animated animate__fadeIn"
        >
          <div className="flex items-center justify-between text-xs px-4 md:px-10 py-2">
            <div className="flex flex-col items-start space-y-2">
              <p>{games.betId}</p>
              <h5 className="flex">
                <span>Total Stake(NGN): </span>{" "}
                <p className="pl-2 font-semibold">{games.totalStake}</p>
              </h5>
              <h5 className="flex">
                <span>Total Odds:</span>{" "}
                <p className="pl-2 font-semibold">{games.totalOdds}</p>
              </h5>
            </div>

            <div className="flex flex-col items-end space-y-2">
              <h5 className="flex items-center">
                <span>{games.betStatus}</span>{" "}
                <span className="block w-3 h-3 ml-2 rounded-full bg-red-500"></span>
              </h5>
              <h5 className="flex">{games.date}</h5>
              <h5 className="w-6 h-6 rounded-full bg-orange-500 p-1">⚾</h5>
            </div>
          </div>

          <div className="flex md:max-w-lg mx-auto rounded-2xl items-center justify-between px-4 md:px-8 py-3 mt-2 shadow-inner">
            <div className="text-xs">
              <a href="#" className="flex items-center space-x-2">
                <span className="text-xl">{games.team1Logo}</span>
                <p className="tracking-wide">{games.team1}</p>
              </a>
            </div>

            <div className="flex flex-col items-center text-xs">
              <span className="block w-6 h-6 bg-gray-900 rounded-full mt-3 text-center text-gray-300">
                90
              </span>
              <h4 className="font-semibold mb-2 mt-1">{games.scores}</h4>
              <h5 className="flex mb-2">
                <span>Odds:</span>{" "}
                <p className="pl-3 font-semibold">{games.odd}</p>
              </h5>
              <h5 className="flex">
                <span>Status:</span>{" "}
                <p className="text-green-400 pl-2 font-semibold">
                  {games.gameStatus}
                </p>{" "}
              </h5>
            </div>

            <div className="text-xs">
              <a href="#" className="flex items-center space-x-2 ">
                <p className="tracking-wide">{games.team2}</p>
                <span className="text-xl">{games.team2Logo}</span>
              </a>
            </div>
          </div>

          <div className="flex md:max-w-lg mx-auto rounded-2xl items-center justify-between px-4 md:px-8 py-3 mt-2 shadow-inner">
            <div className="text-xs">
              <a href="#" className="flex items-center space-x-2 ">
                <span className="text-xl">{games.team1Logo}</span>
                <p className="tracking-wide">{games.team1}</p>
              </a>
            </div>

            <div className="flex flex-col items-center text-xs">
              <span className="block w-6 h-6 bg-gray-900 rounded-full mt-3 text-center  text-gray-300">
                90
              </span>
              <h4 className="font-semibold mb-2 mt-1">{games.scores}</h4>
              <h5 className="flex mb-2">
                <span>Odds:</span>{" "}
                <p className="pl-3 font-semibold">{games.odd}</p>
              </h5>
              <h5 className="flex">
                <span>Status:</span>{" "}
                <p className="text-red-500 pl-2 font-semibold">
                  {games.gameStatus}
                </p>{" "}
              </h5>
            </div>

            <div className="text-xs">
              <a href="#" className="flex items-center space-x-2 ">
                <p className="tracking-wide">{games.team2}</p>
                <span className="text-xl">{games.team2Logo}</span>
              </a>
            </div>
          </div>

          <div className="flex md:max-w-lg mx-auto rounded-2xl items-center justify-between px-4 md:px-8 py-3 mt-2 shadow-inner">
            <div className="text-xs">
              <a href="#" className="flex items-center space-x-2 ">
                <span className="text-xl">{games.team1Logo}</span>
                <p className="tracking-wide">{games.team1}</p>
              </a>
            </div>

            <div className="flex flex-col items-center text-xs">
              <span className="block w-6 h-6 bg-gray-900 rounded-full mt-3 text-center text-gray-300">
                90
              </span>
              <h4 className="font-semibold mb-2 mt-1">{games.scores}</h4>
              <h5 className="flex mb-2">
                <span>Odds:</span>{" "}
                <p className="pl-3 font-semibold">{games.odd}</p>
              </h5>
              <h5 className="flex">
                <span>Status:</span>{" "}
                <p className="text-green-400 pl-2 font-semibold">
                  {games.gameStatus}
                </p>{" "}
              </h5>
            </div>

            <div className="text-xs">
              <a href="#" className="flex items-center space-x-2 ">
                <p className="tracking-wide">{games.team2}</p>
                <span className="text-xl">{games.team2Logo}</span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
