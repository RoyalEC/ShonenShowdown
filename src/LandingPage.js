import react from "react";
import * as THREE from "three";
import Header from "./Header.js";
import Rasengan from "./Rasengan.js";

function LandingPage() {
  return (
    <>
      <Header />
      <div>
        {/* <h1>Shonen Showdown</h1>
        <h2>Choose your fighter!</h2> */}
      </div>
      <Rasengan />
    </>
  );
}

export default LandingPage;
