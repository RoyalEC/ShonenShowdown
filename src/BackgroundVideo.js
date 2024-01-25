import React from "react";

function BackgroundVideo() {
  return (
    <div id="video-container">
      <video autoPlay loop muted id="background-video">
        <source src="/animemix.mp4" type="video/mp4" />
      </video>
      <div id="video-overlay"></div>
    </div>
  );
}

export default BackgroundVideo;
