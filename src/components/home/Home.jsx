import React from "react";
import MovieBlock from "../common/movieBlock/MovieBlock";
import Jumbotron from "../jumbotron/Jumbotron";
import Banner from "../banner/Banner";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Banner />
      <Jumbotron />
      <MovieBlock title="Trending Shows" fetchURL="/fetchTrending?limit=12" />
      <MovieBlock
        title="Netflix Originals"
        fetchURL="/fetchNetflixOriginal?limit=12"
      />
      <MovieBlock title="Latest Tv Shows" fetchURL="/fetchPopularTv?limit=12" />
    </div>
  );
};

export default Home;
