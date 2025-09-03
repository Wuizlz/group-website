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
          projects that connect theory with real world use. I’m focused on
          improving my skills in web development and mobile apps while also
          exploring areas like cybersecurity and AI. My goal is to grow as a
          developer through hands on projects and teamwork, creating solutions
          that are useful and meaningful.
        </p>
      </div>

      {/* Wrap Skills + Role in a flex container */}
      <div className={styles.sectionContainer}>
        <div className={styles.sectionBox}>
          <h1 className={styles.title}>Skills</h1>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Languages:</strong> Java, Typescript, JavaScript, Python,
              HTML, CSS
            </li>
            <li className={styles.listItem}>
              <strong>Frameworks & Libraries:</strong> React Native, Node.js,
              Mobile Development
            </li>
            <li className={styles.listItem}>
              <strong>Tools:</strong> Git, GitHub, Linux, VsCode
            </li>
            <li className={styles.listItem}>
              <strong>Databases:</strong> MySQL (learning)
            </li>
          </ul>
        </div>

        <div className={styles.sectionBox}>
          <h1 className={styles.title}>Role</h1>
          <p className={styles.sentence}>
            On this project, I contributed by creating and developing my
            dedicated page within the site. I designed the layout and content
            for the Krish page, ensuring it matched the overall style of the
            project while reflecting my personal introduction. My work focused
            on adding clear structure, consistent styling, and smooth
            integration with the existing navigation so that it blended
            seamlessly with the rest of the website.
          </p>
        </div>
      </div>
    </main>
  );
}
