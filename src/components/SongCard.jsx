import { Link } from "react-router-dom"; // allows us to navigate to the individual song
import { useDispatch } from "react-redux";
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

const SongCard = ({ song, isPlaying, activeSong, data, i }) => {
  // component responsible for:
  // 1. rendering the songs data = coverart, title, subtitle
  // 2. setting dynamic values to the links, so we can access the song's page

  const dispatch = useDispatch(); // initializing the dispatch

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        {/* container on active */}
        <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
            activeSong?.title === song.title
              ? "flex bg-black bg-opacity-70"
              : "hidden"
          }`}
        >
          <PlayPause
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <img src={song.images?.coverart} alt="song-img" />
      </div>

      {/* titles container */}
      <div className="mt-4 flex flex-col">
        {/* Song */}
        <p className="font-semibold text-lg text-white truncate">
          {/* the p is rendering a link, which will allow us to click on the song and access it */}
          <Link to={`/songs/${song?.key}`}>{song.title}</Link>
        </p>
        {/* Artist */}
        <p className="text-sm trucnate text-gray-300 mt-1">
          <Link
            to={
              song.artists
                ? `/artists/${song?.artists[0]?.adamid}`
                : "/top-artists"
            }
          >
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
