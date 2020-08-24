import React, { useState, useEffect } from "react";
import Row from "../row/Row";
import Card from "../card/Card";
import axios from "axios";
import movieTrailer from "movie-trailer";
import ModalVideo from "react-modal-video";
//import YouTube from "react-youtube";
import "./movieBlock.css";

const MovieBlock = ({ title, fetchURL }) => {
  const basicURL = "/api/fetchMovies";
  const baseImageURL = "https://image.tmdb.org/t/p/original";
  const [movies, setMovies] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [trailerURL, setTrailerURL] = useState("");

  // const youtube = {
  //   youtube: {
  //     autoplay: 1,
  //     showinfo: 0,
  //     //controls: 0,
  //   },
  // };

  useEffect(() => {
    async function fetchData() {
      try {
        const {
          data: { results },
        } = await axios.get(basicURL + fetchURL);

        setMovies(results);
        //return results;
      } catch (error) {
        console.log("Fetch Movie: ", error);
      }
    }
    fetchData();
  }, [fetchURL]);

  const handleClick = (movie) => {
    const name = movie?.name || movie?.title || movie?.original_name;

    movieTrailer(name)
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        //console.log(urlParams);
        setTrailerURL(urlParams.get("v"));
        //console.log(movie);
        setIsOpen(true);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container-fluid ">
      <Row title={title} />
      <div className="row movie_container">
        {movies.map((movie) => (
          <Card
            key={movie.id}
            cardClick={() => handleClick(movie)}
            title={movie.name}
            path={`${baseImageURL}${movie.poster_path}`}
          />
        ))}
      </div>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={trailerURL}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export default MovieBlock;
