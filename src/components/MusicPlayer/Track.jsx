import React from "react";

const Track = ({ isPlaying, isActive, activeSong }) => (
  // track's container
  <div className="flex-1 flex items-center justify-start">
    {/* spinning track's album */}
    <div
      className={`${
        isPlaying && isActive ? "animate-[spin_5s_infinite]" : ""
      } hidden sm:block h-16 w-16 mr-4`}
    >
      <img
        src={activeSong?.images?.coverart}
        alt="cover art"
        className="rounded-full"
      />
    </div>
    {/* track's title and artist container */}
    <div className="w-[50%]">
      <p className="truncate text-white font-bold text-lg">
        {activeSong?.title ? activeSong?.title : "No active Song"}
      </p>
      <p className="truncate text-gray-300">
        {activeSong?.subtitle ? activeSong?.subtitle : "No active Song"}
      </p>
    </div>
  </div>
);

export default Track;
