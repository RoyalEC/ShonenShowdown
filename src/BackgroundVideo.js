import React from "react";
import styles from "./BackgroundVideo.module.css";

function BackgroundVideo() {
  return (
    <div className={styles.videoContainer}>
      <video
        autoPlay
        loop
        muted
        id="background-video"
        onError={(e) => console.log("Video error:", e)}
      >
        <source src="/animemix.mp4" type="video/mp4" />
      </video>

      <div className={styles.videoOverlay}></div>
    </div>
  );
}

export default BackgroundVideo;
