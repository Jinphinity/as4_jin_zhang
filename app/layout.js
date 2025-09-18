// StAuth10222: I Jin Zhang, 000878821 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else.

import Navigation from '@/components/Navigation';
import styles from './layout.module.css';

export const metadata = {
  title: 'My Next.js Application',
  description: 'A component-based web application built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={styles.container}>
          <header className={styles.header}>
            <h1 className={styles.headerTitle}>My Web Application</h1>
          </header>
          
          <Navigation />
          
          <main className={styles.main}>
            {children}
          </main>
          
          <footer className={styles.footer}>
            <p>&copy; 2024 My Web Application. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}