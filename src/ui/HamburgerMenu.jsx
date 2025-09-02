import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./HamburgerMenu.module.css";

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);
  const panelRef = useRef(null);

  const location = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/Daniel", label: "Daniel" },
    { to: "/Dimitri", label: "Dimitri" },
  ];

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
    <div className={styles.wrapper}>
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
          <div className={styles.sectionTitle}> Links</div>
          {links.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={
                  location.pathname === link.to
                    ? `${styles.item} ${styles.active}`
                    : styles.item
                }
                aria-current={isActive ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

// .filter((link) => link.to !== location.pathname)
