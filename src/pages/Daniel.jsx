import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import styles from "../pages/Home.module.css";

export default function Daniel() {
  const { setFooterLinks } = useOutletContext();
  useEffect(() => {
    setFooterLinks({
      linkedin: "https://www.linkedin.com/in/daniel-briseno-2aa272223/",
      github: "https://github.com/Wuizlz",
      instagram: "https://www.instagram.com/schoollemm/?next=%2F",
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
        <div className={styles.header}>
          <h1 className={styles.title}>Certifications & Skills</h1>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Certifications:</strong> The Complete Full-Stack Web
              Development Bootcamp (Udemy), Java Data Structures and Algorithms
              Masterclass (Udemy), Programming with JavaScript(Udemy) , The
              Ultimate React Course 2025: React, Next.js, Redux & More (Udemy)
              (in progress)
            </li>
          </ul>

          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Languages:</strong> Java, JavaScript, Python, C, HTML,
              CSS,
            </li>
            <li className={styles.listItem}>
              <strong>Frameworks & Libraries:</strong> React, Node.js, Tailwind,
              Router, Bootstrap, Express, Passport, Redux, Context
            </li>
            <li className={styles.listItem}>
              <strong>Tools:</strong> Git, GitHub, VsCode, Intelli-J, Postman,
              Yarn, Vite, CRA, Maven
            </li>
            <li className={styles.listItem}>
              <strong>Databases:</strong> Postgres
            </li>
          </ul>
        </div>

        <h1 className={styles.title}>Role</h1>
        <p className={styles.sentence}>
          I built the app’s infrastructure from the ground up using Vite,
          setting up React Router with routes and paths that allowed my
          teammates to easily integrate their pages. I also developed the
          layout, styling, and core functionalities to ensure a consistent and
          functional experience across the project.
        </p>
      </div>
    </main>
  );
}
