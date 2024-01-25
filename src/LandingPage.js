import react from "react";
import * as THREE from "three";
import Header from "./Header.js";

function LandingPage() {
  return (
    <>
      <Header />
      <div>
        <h1>Shonen Showdown</h1>
        <h2>Choose your fighter!</h2>
      </div>
      THREE.Scene();
    </>
  );
}

export default LandingPage;
