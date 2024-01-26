// Desc: This is the main app file that will be used to render all of the components
import React from "react";
import "./App.css";
import LandingPage from "./LandingPage.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetStarted from "./GetStarted.js";
import HowToPlay from "./HowToPlay.js";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" Component={LandingPage} />
            <Route path="/get-started" Component={GetStarted} />
            <Route path="/how-to-play" Component={HowToPlay} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
