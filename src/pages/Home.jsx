import styles from "../pages/Home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1 className={styles.title}>About Us</h1>
        <p className={styles.sentence}>
          We’re a group of four passionate developers who share a common vision:
          creating better experiences and opportunities for students and staff.
          Our focus is on making education more supportive, inclusive, and
          inspiring, while building pathways for growth and success. Driven by
          the belief that technology and teamwork can improve campus life, we’re
          committed to helping students reach their full potential and giving
          staff the tools to engage and connect more meaningfully. At our core,
          we want to bring positive change, open new doors, and make learning
          communities stronger for everyone.
        </p>
      </div>
    </main>
  );
}
