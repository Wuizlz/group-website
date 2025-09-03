import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import styles from "../pages/Home.module.css";

export default function Daniel() {
  const { setFooterLinks } = useOutletContext();
  useEffect(() => {
    setFooterLinks({
      linkedin: "https://www.linkedin.com/in/nicholas-steltzner-500715302/",
      github: "https://github.com/Roland-143",
    });
    return () => setFooterLinks(null);
  }, [setFooterLinks]);

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1 className={styles.title}>Nick Steltzner</h1>
        <p className={styles.sentence}>
            My name is Nick Steltzner, and I am a junior at Purdue Northwest University pursuing a degree 
            in Computer Science with a concentration in AI Studies and a minor in Cybersecurity. I am currently 
            working to improve my skills in React Native, TypeScript, Java, and Python, with the goal of building a 
            career in software development and eventually transitioning into DevSecOps. On this project, 
            I contributed by enhancing visual and textual elements to ensure a smooth and friendly user experience. 
            Through clear communication, strong programming practices, and effective teamwork, I strive to create 
            impactful projects that will a positive difference in the world! Feel free to check out my socials below!
          </p>
          <p className={styles.sentence}>
            Email me: Nsteltzn@pnw.edu
          </p>
      </div>
      <div className={styles.header}>
        <h1 className={styles.title}>Certifications & Skills</h1>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <strong>Certifications:</strong> Logs For Security (Sumo), Sumo Security Pipeline (Sumo), Sumo Logic Fundamentals (Sumo), Network+ (in progress)
          </li>
        </ul>

        <ul className={styles.list}>
          <li className={styles.listItem}>
            <strong>Languages:</strong> Java, Typescript, JavaScript, Python, Kotlin, HTML, CSS
           </li>
           <li className={styles.listItem}>
            <strong>Frameworks & Libraries:</strong> React Native, Node.js, Mobile Development
          </li>
          <li className={styles.listItem}>
            <strong>Tools:</strong> Git, GitHub, Linux, VsCode, Intelli-J, Postman, Jira & Confluence, Sumo Logic, Docker (Learning)
          </li>
          <li className={styles.listItem}>
            <strong>Databases:</strong> MySQL (learning), Query Writing
          </li>
        </ul>
      </div>
    </main>
  );
}
