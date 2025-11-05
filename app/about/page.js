// StAuth10222: I Jin Zhang, 000878821 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else.

import Image from 'next/image';
import styles from '../page.module.css';

export default function About() {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.heading}>About</h1>
      <div className={styles.content}>
        <p>
          Welcome to our About page! This section provides information about our web application and its purpose.
        </p>
        <p>
          Our application is built using Next.js, a powerful React framework that enables server-side rendering, 
          static site generation, and many other advanced features. The application demonstrates modern web 
          development practices including component-based architecture, CSS modules for styling, and dynamic routing.
        </p>
        <div className={styles.imageContainer}>
          <Image
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>
        <p className={styles.spacedSection}>
          The application features a responsive design, navigation highlighting, and demonstrates various 
          Next.js concepts including layouts, dynamic routes, and component composition.
        </p>
      </div>
    </div>
  );
}