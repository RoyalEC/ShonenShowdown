import react from "react";
import * as THREE from "three";
import Header from "./Header.js";
import Rasengan from "./Rasengan.js";
import Body from "./Body.js";
import BackgroundVideo from "./BackgroundVideo.js";

function LandingPage() {
  return (
    <>
      <Header />
      <Rasengan />
      <BackgroundVideo />
      <div>
        {/* <h1>Shonen Showdown</h1>
        <h2>Choose your fighter!</h2> */}
      </div>
      <Body />
    </>
  );
}

export default LandingPage;
