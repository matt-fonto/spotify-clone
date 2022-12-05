import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";
import { useState } from "react";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

const Discover = () => {
  // component responsible for:
  // 1. calling our customized API hook = useTopChartsQuery
  // 2. getting the data from the api topcharts
  // 3. parenting the Loader, the Error and the SongCard components
  // 4. passing the necessary props to the songCard component after having fetched the data

  const { data, isFetching, error } = useGetTopChartsQuery();
  // we get 3 different things:
  // 1. data = the actual result of the API call
  // 2. isFetching = it shows it if it's loading
  // 3. error = if an error has happened

  const [genreTitle, setGenreTitle] = useState("Rock");

  if (isFetching) return <Loader title="Loading songs..." />;

  if (error) return <Error />;

  console.log(data);

  return (
    <div className="flex flex-col">
      {/* selecting the genre */}
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">
          <span className="opacity-70">Discover</span> {genreTitle}
        </h2>
        <select
          onChange={() => {}}
          value=""
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >
          {genres.map((genre) => {
            return (
              <option key={genre.value} value={genre.value}>
                {genre.title}
              </option>
            );
          })}
        </select>
      </div>

      {/* the songs container */}
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, i) => (
          <SongCard key={song.key} song={song} i={i} />
        ))}
      </div>
    </div>
  );
};

export default Discover;
