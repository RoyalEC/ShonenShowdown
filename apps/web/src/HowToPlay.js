import React, { useEffect, useState } from "react";
import styles from "./HowToPlay.module.css";
// import { use } from "backend/userRoutes";

function HowToPlay() {
  const [character, setCharacter] = useState(null);
  const [quote, setQuote] = useState(null);

  const fetchQuote = () => {
    fetch("https://animechan.xyz/api/random")
      .then((response) => response.json())
      .then((quote) => setQuote(quote));
  };

  return (
    <>
      <div className={styles.HowToPlay}>
        <div className={styles.titleContainer}>
          <h1 className={styles.mainTitle}>How To Play</h1>
        </div>
        <div className={styles.article}>
          <h2 className={styles.subtitle}>Sign-Up</h2>
          <h3 className={styles.subtitleDetail}>On the Street in Brooklyn</h3>
          {/* <img
            className={styles.blogImage}
            src="./blog-image-1.jpg"
            alt="Blog context"
          /> */}
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            omnis. Nostrum, facilis aliquid! Laudantium, alias inventore
            dignissimos voluptatem repellat iste, vero architecto, fugiat illum
            aperiam temporibus molestiae recusandae quia excepturi.
          </p>
          <button className={styles.continueButton}>Continue...</button>
        </div>
        <div className={styles.article}>
          <h2 className={styles.subtitle}>11/11/20</h2>
          <h3 className={styles.subtitleDetail}>Vintage in Vogue</h3>
          {/* <img
            // className={styles.blogImage}
            src="./blog-image-2.jpg"
            alt="Blog context"
          /> */}
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            omnis. Nostrum, facilis aliquid! Laudantium, alias inventore
            dignissimos voluptatem repellat iste, vero architecto, fugiat illum
            aperiam temporibus molestiae recusandae quia excepturi.
          </p>
          <button className={styles.continueButton}>Continue...</button>
          <button className={styles.continueButton} onClick={fetchQuote}>
            Get Quote
          </button>
          {quote && (
            <div>
              <p>{quote.quote}</p>
              <p>{quote.anime}</p>
              <p>{quote.character}</p>
              <h2 className={styles.subtitle}>Vote for Next Character</h2>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default HowToPlay;
