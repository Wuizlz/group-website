import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import styles from "../pages/Home.module.css";

export default function Krish() {
  const { setFooterLinks } = useOutletContext();

  useEffect(() => {
    setFooterLinks({
      github: "https://github.com/kprajapati08",
    });
    return () => setFooterLinks(null);
  }, [setFooterLinks]);

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1 className={styles.title}>Krish Prajapati</h1>
        <p className={styles.sentence}>
          I’m Krish Prajapati a computer science student who enjoys building
          projects that connect theory with real-world use. I’m focused on
          improving my skills in web development and mobile apps while also
          exploring areas like cybersecurity and AI. My goal is to grow as a
          developer through hands on projects and teamwork, creating solutions
          that are useful and meaningful.
        </p>
      </div>
    </main>
  );
}
