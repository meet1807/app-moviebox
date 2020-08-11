import React, { useState, useEffect } from "react";
import Row from "../row/Row";
import Card from "../card/Card";
import axios from "axios";

const MovieBlock = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const {
          data: { results },
        } = await axios.get(fetchURL);
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
      <Row title={title} />
      <Card data={movies} />
    </div>
  );
};

export default MovieBlock;
