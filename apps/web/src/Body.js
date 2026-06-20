import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./Body.module.css";

function Body() {
  const navigate = useNavigate();
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleClick = (e) => {
    navigate("/create-account");
  };
  return (
    <>
      <div className={styles.bodyText}>
        <h1 className={styles.landText}>Shonen Showdown</h1>
        <p className={styles.bText}>
          Unleash Your Power in the Ultimate Anime Universe
        </p>
        <Button
          variant="outline-light"
          className={styles.playNowButton}
          onClick={handleClick}
        >
          Play Now
        </Button>
      </div>
    </>
  );
}

export default Body;
