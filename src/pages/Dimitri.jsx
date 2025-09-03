import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import styles from "../pages/Home.module.css";

export default function Dimitri() {
  const { setFooterLinks } = useOutletContext();
  useEffect(() => {
    setFooterLinks({
      linkedin: "https://www.linkedin.com/in/dimitri-josifoski-537576336/",
      github: "https://github.com/DimitriJosifoski",
    });
    return () => setFooterLinks(null);
  }, [setFooterLinks]);

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1 className={styles.title}>Dimitri Josifoski</h1>
        <p className={styles.sentence}>
          I’m Dimitri Josifoski—a dedicated Computer Science student at Purdue University Northwest, 
          currently excelling with a 4.0 GPA and on track to graduate early thanks to my strong academic performance. 
          With a passion for software development and IT, 
          I’ve developed projects like a portfolio website and a calculator using HTML, CSS, and JavaScript, 
          and hold certifications in JavaScript, Python, CompTIA A+, and CompTIA Network+. 
          My education at PNW has equipped me with a solid foundation in programming, data structures, and algorithms, 
          which I am eager to apply in real-world settings. 
        </p>
      </div>
      <div className={styles.header}>
        <h1 className={styles.title}>Certifications & Skills</h1>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <strong>Certifications:</strong> JavaScript (SoloLearn), Python (SoloLearn), CompTIA A+, CompTIA Network+
          </li>
        </ul>

        <ul className={styles.list}>
          <li className={styles.listItem}>
            <strong>Languages:</strong> Java, JavaScript, Python, HTML, CSS
          </li>
          <li className={styles.listItem}>
            <strong>Tools:</strong> Git, GitHub, Linux, VsCode, ChatGPT, Copilot
          </li>
          <li className={styles.listItem}>
            <strong>Databases:</strong> MySQL (learning)
          </li>
        </ul>
      </div>
      <div className={styles.header}>
        <h1 className={styles.title}>Role</h1>
        <p className={styles.sentence}>
          In this project, I contributed ideas to the overall design and functionality of the website. 
          I also worked mostly on my page of the website, 
          focusing on the content and layout to effectively showcase my background and skills. 
        </p>
      </div>
    </main>
  );
}
