// Desc: This is the main app file that will be used to render all of the components
import React from "react";
import "./App.css";
import LandingPage from "./LandingPage.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  ProtectedRoute,
  Navigate,
} from "react-router-dom";
import GetStarted from "./GetStarted.js";
import HowToPlay from "./HowToPlay.js";
import PhaserComponent from "./Phaser.js";
import CreateAccount from "./CreateAccount.js";
import { NewFightScene } from "./FightScene.js";
import SelectYourFighter from "./SelectYourFighter.js";
import GameComponent from "./GameComponent.js";

function App() {
  const ProtectedRoute = ({ SelectYourFighter }) => {
    const isAuthenticated = localStorage.getItem("authToken");
    if (isAuthenticated) {
      return <Route path="/select-fighter" element={SelectYourFighter} />;
    } else {
      return <Navigate to="/get-started" />;
    }
  };

  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" Component={LandingPage} />
            <Route path="/get-started" Component={GetStarted} />
            <Route path="/how-to-play" Component={HowToPlay} />
            <Route path="/create-account" Component={CreateAccount} />
            <Route path="/game" Component={PhaserComponent} />
            <Route path="/fight" Component={NewFightScene} />
            {ProtectedRoute({ component: SelectYourFighter })}
          </Routes>
        </Router>
        {/* <PhaserComponent /> */}
      </div>
    </>
  );
}

export default App;
