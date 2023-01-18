import React from "react";
import { Error, Loader, ArtistCard } from "../components";

import { useGetTopChartsQuery } from "../redux/services/shazamCore"; //importing the hook

const TopArtists = () => {
  const { data, isFetching, error } = useGetTopChartsQuery(); // calling the hook and destructuring the returned object into 3 variables

  if (isFetching) return <Loader title="Loading top artists" />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Top Artists
      </h2>

      {/* songs container */}
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((track) => (
          <ArtistCard key={track.key} track={track} />
        ))}
      </div>
    </div>
  );
};

export default TopArtists;
