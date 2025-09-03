import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import styles from "../pages/Home.module.css";

export default function Daniel() {
  const { setFooterLinks } = useOutletContext();
  useEffect(() => {
    setFooterLinks({
      linkedin: "https://www.linkedin.com/in/nicholas-steltzner-500715302/",
      github: "https://github.com/Roland-143",
      email: "mailto:nsteltzn@pnw.edu"
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
            strenghtening my skills in React Native, TypeScript, Java, and Python, with the goal of building a 
            career in software development and eventually transitioning into DevSecOps.  
            By combining clear communication, strong programming practices, and effective teamwork, I strive to 
            create impactful projects that make a meaningful difference in people's lives. Feel free to check out my socials below!
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
      <div className={styles.header}>
        <h1 className={styles.title}>Role</h1>
        <p className={styles.sentence}>
             On this project, I contributed by designing and enhancing both visual and textual elements to ensure 
             a smooth, user-friendly experience. I developed sections that would allow for my collaborators
             to easily add their information to the Certifications & Skills section, and I actively contributed 
             ideas during brainstorming, co-collaboration and planning sessions!
        </p>
      </div>
    </main>
  );
}
