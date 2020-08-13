import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./jumbotron.css";

const Jumbotron = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-1 icon_placeholder"
            style={{ display: "flex", alignItems: "center" }}
          >
            <FontAwesomeIcon
              icon={["fas", "video"]}
              className="  jumbotron_icon"
            />
          </div>
          <div className="col-11">
            <h3>
              Movie<span className="text-muted">Box </span>
              <span className="blockquote-footer">A Movie Rental Service</span>
            </h3>
            <p className="lead">
              Just a faster and better place to watch or rent movies online!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
