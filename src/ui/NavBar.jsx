import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import logoURL from "./logo.png";

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <img src={logoURL} alt="Logo" className={styles.logoImg} />
          <span className={styles.logoText}>Group Website</span>
        </Link>
      </div>
    </nav>
  );
}
