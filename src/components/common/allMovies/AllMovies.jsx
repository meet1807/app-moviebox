import React, { useState, useEffect } from "react";
import "./allMovies.css";
import MovieBlock from "../movieBlock/MovieBlock";
import Paginate from "../pagination/Paginate";

const AllMovies = (props) => {
  const [page, setPage] = useState(1);
  const [genre, setGenre] = useState("");
  const pageTitle = props.match.params.id;

  useEffect(() => {
    if (pageTitle === "action") setGenre("fetchActionMovies");
    else if (pageTitle === "comedy") setGenre("fetchComedyMovies");
    else if (pageTitle === "romance") setGenre("fetchRomanceMovies");
    else if (pageTitle === "horror") setGenre("fetchHorrerMovies");
    else if (pageTitle === "documentaries")
      setGenre("fetchDocumentariesMovies");
  }, [pageTitle]);

  //console.log(pageTitle);
  //const page = props.match.params.query;

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className="allmovies_container container-fluid">
      <div className="movie__container">
        {genre && (
          <MovieBlock
            title={pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1)}
            fetchURL={`/${genre}?page=${page}&limit=18`}
          />
        )}
      </div>
      <Paginate count={500} page={page} onPageChange={handlePageChange} />
    </div>
  );
};

export default AllMovies;
