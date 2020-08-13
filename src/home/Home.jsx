import React from "react";
import MovieBlock from "../components/common/movieBlock/MovieBlock";
import Jumbotron from "../components/jumbotron/Jumbotron";
import Banner from "../components/banner/Banner";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Banner />
      <Jumbotron />
      <MovieBlock title="Trending Shows" fetchURL="/fetchTrending" />
      <MovieBlock title="Netflix Originals" fetchURL="/fetchNetflixOriginal" />
      <MovieBlock title="Latest Tv Shows" fetchURL="/fetchPopularTv" />
    </div>
  );
};

export default Home;
