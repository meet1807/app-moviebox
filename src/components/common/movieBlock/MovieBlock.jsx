import React, { useState, useEffect } from "react";
import Row from "../row/Row";
import Card from "../card/Card";
import axios from "axios";
import "./movieBlock.css";

const MovieBlock = ({ title, fetchURL }) => {
  const basicURL = "/api/fetchMovies";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const {
          data: { results },
        } = await axios.get(basicURL + fetchURL);
        setMovies(results);
        return results;
      } catch (error) {
        console.log("Fetch Movie: ", error);
      }
    }
    fetchData();
  }, [fetchURL]);

  return (
    <div>
      <div className="container-fluid ">
        <Row title={title} />
        <div className="row movie_container">
          <Card data={movies} />
        </div>
      </div>
    </div>
  );
};

export default MovieBlock;
