import React from "react";

const Card = ({ data }) => {
  const baseURL = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      {data.map((data) => (
        <img
          key={data.id}
          src={`${baseURL}${data.poster_path}`}
          className="card-img"
          alt={data.name}
        />
      ))}
    </div>
  );
};

export default Card;
