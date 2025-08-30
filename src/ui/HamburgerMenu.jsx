import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./HamburgerMenu.module.css";

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    function onClick(e) {
      if (!open) return;
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target) &&
        btnRef.current &&
        !btnRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, [open]);

  return (
    <div className={ styles.wrapper}>
      <button
        ref={btnRef}
        aria-haspopup="menu"
        aria-expanded={open}
        className={styles.button}
        onClick={() => setOpen((o) => !o)}
      >
        <span className={styles.icon} aria-hidden>
          ☰
        </span>
      </button>

      {open && (
        <div ref={panelRef} role="menu" className={styles.menu}>
          <div className={styles.section}></div>
          <div className={styles.sectionTitle}></div>
          <Link to="/" className={styles.item} onClick={() => setOpen(false)}>
            {" "}
            Home{" "}
          </Link>
          <Link
            to="/Daniel"
            className={styles.item}
            onClick={() => setOpen(false)}
          >
            Daniel
          </Link>
        </div>
      )}
    </div>
  );
}
