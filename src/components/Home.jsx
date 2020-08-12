import React from "react";
import MovieBlock from "./common/movieBlock/MovieBlock";

const Home = () => {
  return (
    <div className="container-fluid">
      <MovieBlock title="Latest Movies" fetchURL="/fetchTrending" />
      <MovieBlock title="Netflix Originals" fetchURL="/fetchNetflixOriginal" />
      <MovieBlock title="Latest Tv Shows" fetchURL="/fetchPopularTv" />
    </div>
  );
};

export default Home;
