import { Link } from "react-router-dom";

const DetailsHeader = ({ artistId, artistData, songData }) => {
  // component container
  return (
    <div className="relative w-full flex flex-col">
      {/* container */}
      <div className="w-full  sm:h-48 h-28 border border-[#333] rounded-md" />

      {/* Details Info */}
      <div className="absolute inset-0 flex items-center">
        <img
          alt="art"
          src={
            artistId
              ? artistData?.attributes?.artwork?.url
                  .replace("{w}", "500")
                  .replace("{h}", "500")
              : songData?.images?.coverart
          }
          className="sm:w-28 w-20 sm:h-28 h-20 rounded-xl object-cover ml-5"
        />

        {/* Text Info */}
        <div className="ml-5">
          <p className="text-white font-bold sm:text-3xl text-xl">
            {artistId ? artistData?.attributes?.name : songData?.title}
          </p>
          {!artistId && (
            <Link to={`artists/${songData?.artists[0].adamid}`}>
              <p className="text-xl text-gray-400 mt-2">{songData?.subtitle}</p>
            </Link>
          )}

          <p className="text-base text-teal-600 mt-2">
            {artistId
              ? artistData?.attributes?.genreNames[0]
              : songData?.genres?.primary}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsHeader;
