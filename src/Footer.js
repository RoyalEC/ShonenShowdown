import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className={styles.footer}>
        <nav className={styles.navbar}>
          <ul className={styles.navItems}>
            <li className={styles.navItem}>
              <a href="/how-to-play" className={styles.navLink}>
                How to Play
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="/get-started" className={styles.navLink}>
                Get Started
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="/contact" className={styles.navLink}>
                Contact
              </a>
            </li>
          </ul>
          <p className={styles.copyRight}>&copy;{currentYear}</p>
        </nav>
      </footer>
    </>
  );
}

export default Footer;
