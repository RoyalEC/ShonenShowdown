import react from "react";
import * as THREE from "three";
import Header from "./Header.js";
import Rasengan from "./Rasengan.js";
import Body from "./Body.js";

function LandingPage() {
  return (
    <>
      <Header />
      <div>
        {/* <h1>Shonen Showdown</h1>
        <h2>Choose your fighter!</h2> */}
      </div>
      <hr></hr>
      <Body />
      <Rasengan />
    </>
  );
}

export default LandingPage;
