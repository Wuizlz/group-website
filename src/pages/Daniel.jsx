import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import styles from "../pages/Home.module.css";

export default function Daniel() {
  const { setFooterLinks } = useOutletContext();
  useEffect(() => {
    setFooterLinks({
      linkedin: "https://www.linkedin.com/in/daniel-briseno-2aa272223/",
      github: "https://github.com/Wuizlz",
    });
    return () => setFooterLinks(null);
  }, [setFooterLinks]);

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1 className={styles.title}>Daniel Briseno</h1>
        <p className={styles.sentence}>
          I’m Daniel Briseño—a Purdue student and developer focused on making
          college more supportive, inclusive, and inspiring. I’m constantly
          leveling up my stack (React, Swift, Node, SQL) and turning what I
          learn into simple, student-first solutions—and clear standpoints on
          what actually helps. I believe thoughtful technology and teamwork can
          open doors, help students reach their potential, and give staff better
          ways to engage. My focus is practical impact: listen well, build with
          care, ship, and improve.
        </p>
      </div>
    </main>
  );
}
