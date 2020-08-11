import React from "react";
import MovieBlock from "./common/movieBlock/MovieBlock";

const Home = () => {
  return (
    <main role="main">
      <MovieBlock
        title="Latest Movies"
        fetchURL="/api/fetchMovies/fetchTrending"
      />
      {/* <MovieBlock title="Netflix Originals" data="" />
      <MovieBlock title="Latest Tv Shows" data="" /> */}
    </main>
  );
};

export default Home;
