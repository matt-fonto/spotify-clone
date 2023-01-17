import { useParams } from "react-router-dom"; //gives us access to our song id
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

import { setActiveSong, playPause } from "../redux/features/playerSlice"; //importing the reducers - to modify the state

import {
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} from "../redux/services/shazamCore";

const SongDetails = () => {
  //component responsible for:
  //1.
  const { songid } = useParams(); //getting the id
  const dispatch = useDispatch(); //initializing the dispatch

  const { activeSong, isPlaying } = useSelector((state) => state.player); //importing the states

  //getting the song data from the API
  //we can rename isFetching to another more descriptive name in order not to confuse the fetching processes
  const { data: songData, isFetching: isFetchingSongDetails } =
    useGetSongDetailsQuery({ songid });

  // getting data from related songs and renaming isFetching
  const {
    data,
    isFetching: isFetchingRelatedSongs,
    error,
  } = useGetSongRelatedQuery({ songid });

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  // handling laoding
  if (isFetchingSongDetails || isFetchingRelatedSongs)
    return <Loader title="Searching song details" />;

  // // handling errors
  // if (error) return <Error />;

  return (
    <div className="flex flex-col">
      {/* Header */}
      <DetailsHeader artistsId="" songData={songData} />

      {/* Lyrics container */}
      <div className="my-10">
        {/* Lyrics Headline */}
        <h2 className="text-white text-3xl font-bold">Lyrics</h2>
        {/* Lyrics text */}
        <div className="mt-5">
          {songData?.sections[1].type === "LYRICS" ? ( //if we have the lyrics
            songData?.sections[1].text.map((line, i) => (
              <p className="text-gray-200 text-base pt-1">{line}</p> //show me them
            ))
          ) : (
            <p className="text-gray-200 text-base pt-1">
              Sorry, no lyrics found
            </p> //otherwise, sorry!
          )}
        </div>
      </div>

      <RelatedSongs
        data={data}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
      />
    </div>
  );
};
export default SongDetails;
