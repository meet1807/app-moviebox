import React from "react";
import "./row.css";

const Row = ({ title }) => {
  return (
    <div className="row_container">
      <h2 className="row_title">{title}</h2>
    </div>
  );
};

export default Row;
