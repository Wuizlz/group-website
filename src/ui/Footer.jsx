import styles from "./AppLayout.module.css";
import PropTypes from "prop-types";

export default function Footer({ links }) {
  const { linkedin, github } = links || {};
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContainerContent}>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
              className={styles.icon}
            >
              <path
                d="M19 0h-14C2.238 0 0 2.238 0 
           5v14c0 2.762 2.238 5 5 5h14c2.762 
           0 5-2.238 5-5V5c0-2.762-2.238-5-5-5zM8 
           19H5V9h3v10zM6.5 7.748c-.966 0-1.75-.783-1.75-1.749s.784-1.75 
           1.75-1.75c.967 0 1.75.784 
           1.75 1.75s-.783 1.749-1.75 1.749zM20 
           19h-3v-5.604c0-1.337-.027-3.059-1.863-3.059-1.864 
           0-2.148 1.456-2.148 2.959V19h-3V9h2.885v1.367h.041c.403-.763 
           1.389-1.566 2.861-1.566 3.059 
           0 3.624 2.014 3.624 4.632V19z"
              />
            </svg>
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
              className={styles.icon}
            >
              <path
                d="M12 .5C5.73.5.98 5.24.98 11.52c0 4.85 
             3.15 8.96 7.52 10.41.55.1.75-.24.75-.53 
             0-.26-.01-.95-.02-1.86-3.06.67-3.71-1.47-3.71-1.47
             -.5-1.27-1.22-1.6-1.22-1.6-.99-.67.07-.66.07-.66 
             1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.56 1.2 
             3.19.92.1-.72.38-1.2.69-1.47-2.44-.28-5.02-1.22-5.02-5.42 
             0-1.2.43-2.17 1.14-2.93-.11-.28-.49-1.42.11-2.96 
             0 0 .93-.3 3.05 1.12.88-.24 1.83-.35 2.77-.35.94 0 
             1.89.12 2.77.35 2.12-1.42 3.05-1.12 3.05-1.12.6 
             1.54.22 2.68.11 2.96.71.76 1.14 1.73 1.14 2.93 
             0 4.21-2.58 5.14-5.04 5.41.39.33.74.98.74 1.98 
             0 1.43-.01 2.58-.01 2.93 0 .29.2.64.76.53 
             4.36-1.45 7.51-5.56 7.51-10.4C23.02 5.24 18.27.5 12 .5z"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  links: PropTypes.object, // or shape({ linkedin: PropTypes.string, github: PropTypes.string })
};
