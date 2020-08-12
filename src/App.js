import React from "react";
import Home from "./components/Home";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

import "./App.css";

library.add(faDatabase, faHeart);

function App() {
  return (
    <main role="main" className="App">
      <Home />
    </main>
  );
}

export default App;
