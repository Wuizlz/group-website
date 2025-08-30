import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./NavBar.module.css";
import logoURL from "/favicon.ico"; // use a tight-cropped PNG if possible
import HamburgerMenu from "./HamburgerMenu.jsx";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={`${styles.inner} ${scrolled ? styles.innerScrolled : ""}`}>
          <Link to="/" className={styles.logo}>
            <img src={logoURL} alt="Logo" className={styles.logoImg} />
            <span className={styles.logoText}></span>
          </Link>
          <HamburgerMenu />
        </div>
      </div>
    </nav>
  );
}
