import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

import "swiper/css";
import "swiper/css/free-mode";

import TopChartCard from "./TopChartCard";
import { useState } from "react";

const TopPlay = () => {
  //component responsible for:
  //1.getting the data and dividing it into charts and artists
  //2.rendering the topChart and topArtists

  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data } = useGetTopChartsQuery();
  const divRef = useRef(null);
  const [path, setPath] = useState(null);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  const topCharts = data?.slice(0, 5); //an object with top 5 songs
  const topArtists = data?.slice(0, 10); //object with top 10 artists

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    // Container
    <div
      ref={divRef}
      className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col"
    >
      {/* Top Chart & Artist Container*/}
      <div className="w-full flex flex-col">
        {/* Top Charts Headline */}
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold text-2xl">Top Charts</h2>
          <Link to="/top-charts">
            <p className="text-gray-300 text-base cursor-pointer">See more</p>
          </Link>
        </div>

        {/* TopChartCard Container */}
        <div className="mt-4 flex flex-col gap-1">
          {topCharts?.map((song, i) => {
            return (
              <TopChartCard
                key={song.key}
                song={song}
                i={i}
                isPlaying={isPlaying}
                activeSong={activeSong}
                handlePauseClick={handlePauseClick}
                // when we click onto a song, we want to know which song is gonna play
                handlePlayClick={() => handlePlayClick(song, i)}
              />
            );
          })}
        </div>

        {/* Top Artists Headline */}
        <div className="w-full flex flex-col mt-8">
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-white font-bold text-2xl">Top Artists</h2>
            <Link to="/top-artists">
              <p className="text-gray-300 text-base cursor-pointer">See more</p>
            </Link>
          </div>
        </div>

        <Swiper
          slidesPerView="auto"
          spaceBetween={15}
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className="mt-4"
        >
          {topArtists?.map((artist) => (
            <SwiperSlide
              key={artist?.key}
              style={{ width: "20%", height: "auto" }}
              className="shadow-lg rounded-full animate-slideright"
            >
              <Link
                // It was needed to add a useState to accomplish the correct path access
                onMouseOver={() => setPath(artist?.artists[0].adamid)}
                to={`/artists/${path}`}
              >
                <img
                  src={artist?.images?.background}
                  artists
                  className="w-full rounded-full object-cover"
                  alt="name"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopPlay;
