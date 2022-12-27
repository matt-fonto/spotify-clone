import { useState } from "react";
import { Link } from "react-router-dom";
import PlayPause from "./PlayPause";

const TopChartCard = ({
  song,
  i,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
}) => {
  const [artistPath, setArtistPath] = useState(null);

  return (
    <div className="w-full flex flex-row items-center hover:bg-purple-900 py-2 p-4 rounded-lg cursor-pointer mb-2">
      <h3 className="font-bold text-base text-white mr-3">{i + 1}.</h3>
      {/* style container */}
      <div className="flex-1 flex flex-row justify-between items-center">
        <img
          src={song?.images?.coverart}
          onClick={() => console.log(song)}
          alt={song?.title}
          className="w-20 h-20 rounded-lg"
        />
        {/* text container */}
        <div className="flex-1 flex flex-col justify-center mx-3">
          {/* Link to song */}
          <Link to={`/songs/${song.key}`}>
            <p className="text-xl font-bold text-white">{song?.title}</p>
          </Link>
          {/* Link to artist */}
          <Link
            onMouseOver={() => setArtistPath(song?.artists[0].adamid)}
            to={`/artists/${artistPath}`}
          >
            <p className="text-base text-gray-300 mt-1">{song?.subtitle}</p>
          </Link>
        </div>
      </div>
      {/* PlayPause */}
      <PlayPause
        isPlaying={isPlaying}
        activeSong={activeSong}
        song={song}
        handlePause={handlePauseClick}
        handlePlay={handlePlayClick}
      />
    </div>
  );
};

export default TopChartCard;
