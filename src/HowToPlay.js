import React from "react";
import styles from "./HowToPlay.module.css";

function HowToPlay() {
  return (
    <>
      <div className={styles.HowToPlay}>
        <div className={styles.titleContainer}>
          <h1 className={styles.mainTitle}>How To Play</h1>
        </div>
        <div className={styles.article}>
          <h2 className={styles.subtitle}>Sign-Up</h2>
          <h3 className={styles.subtitleDetail}>On the Street in Brooklyn</h3>
          <img
            className={styles.blogImage}
            src="./blog-image-1.jpg"
            alt="Blog context"
          />
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
          <img
            className={styles.blogImage}
            src="./blog-image-2.jpg"
            alt="Blog context"
          />
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            omnis. Nostrum, facilis aliquid! Laudantium, alias inventore
            dignissimos voluptatem repellat iste, vero architecto, fugiat illum
            aperiam temporibus molestiae recusandae quia excepturi.
          </p>
          <button className={styles.continueButton}>Continue...</button>
        </div>
      </div>
    </>
  );
}

export default HowToPlay;
