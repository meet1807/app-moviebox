import React from "react";
import Home from "./components/home/Home";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faDatabase, faVideo } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

import "./App.css";

library.add(faDatabase, faHeart, faVideo);

function App() {
  return (
    <main className="App">
      <Home />
    </main>
  );
}

export default App;
