import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

const PlayPause = ({ song, isPlaying, activeSong, handlePause, handlePlay }) =>
  //component responsible for:
  //1. either rendering a play or pause icon based if we're or not listening to that song
  //2. allow us to play or pause the song

  // if we're currently playing the song
  isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle size={35} className="text-gray-300" onClick={handlePause} />
  ) : (
    <FaPlayCircle size={35} className="text-gray-300" onClick={handlePlay} />
  );

export default PlayPause;
