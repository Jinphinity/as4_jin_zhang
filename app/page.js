// StAuth10222: I Jin Zhang, 000878821 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else.

import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.heading}>Welcome to My Web Application</h1>
      <div className={styles.content}>
        <p>
          This is the home page of my Next.js web application. Navigate using the menu above to explore different sections including the Feed, Profile, About, and Contact pages.
        </p>
        <p>
          This application demonstrates modern web development practices using Next.js with component-based architecture, CSS modules for styling, and dynamic routing capabilities.
        </p>
      </div>
    </div>
  );
}