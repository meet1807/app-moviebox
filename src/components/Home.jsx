import React from "react";
import MovieBlock from "./common/movieBlock/MovieBlock";
import Jumbotron from "./jumbotron/Jumbotron";

const Home = () => {
  return (
    <div className="container-fluid">
      {/* <Jumbotron /> */}
      <MovieBlock title="Trending Shows" fetchURL="/fetchTrending" />
      <MovieBlock title="Netflix Originals" fetchURL="/fetchNetflixOriginal" />
      <MovieBlock title="Latest Tv Shows" fetchURL="/fetchPopularTv" />
    </div>
  );
};

export default Home;
