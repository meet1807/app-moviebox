import React from "react";
import Home from "./components/home/Home";
import LoginForm from "./components/login/LoginForm";
import RegisterForm from "./components/register/RegisterForm";
import NotFound from "./components/common/notFound/NotFound";
import NavBar from "./components/navbar/Navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faDatabase, faVideo } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

import "./App.css";
import AllMovies from "./components/common/allMovies/AllMovies";

library.add(faDatabase, faHeart, faVideo);

function App() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <main className="App">
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/genre/:id" component={AllMovies} />
          <Route path="/home" component={Home} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/home" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </>
  );
}

export default App;
