import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import "./navbar.css";

const NavBar = (props) => {
  const [show, handleShow] = useState(false);
  // const path = window.location.pathname;
  //console.log(path);

  useEffect(() => {
    //if (path === "/" || path === "/home") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
    //} else if (path !== "/" || path !== "/home") handleShow(true);
    //else handleShow(false);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-md navbar-dark fixed-top ${
        show && "bg-dark"
      }`}
    >
      <Link className="navbar-brand" to="/home">
        MovieBox
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <div className="dropdown">
              <button
                type="button"
                className="btn navbar-button dropdown-toggle"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Genres
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <Link className="dropdown-item" to="/genre/action">
                  Action
                </Link>
                <Link className="dropdown-item" to="/genre/comedy">
                  Comedy
                </Link>
                <Link className="dropdown-item" to="/genre/Romance">
                  Romance
                </Link>
                <Link className="dropdown-item" to="/genre/horror">
                  Horror
                </Link>
                <Link className="dropdown-item" to="/genre/documentaries">
                  Documentaries
                </Link>
              </div>
            </div>
          </li>
          {/* <li className="nav-item ">
            <NavLink className="nav-link" to="/login">
              login
            </NavLink>
          </li> */}
        </ul>
        <form className="form-inline mt-2 mt-md-0">
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
          {/* <button className="btn  my-2 my-sm-0" type="submit">
            Search
          </button> */}
        </form>
      </div>
    </nav>
  );
};

export default withRouter(NavBar);
