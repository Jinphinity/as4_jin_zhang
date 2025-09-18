// StAuth10222: I Jin Zhang, 000878821 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else.

import SubNavigation from '@/components/SubNavigation';
import styles from './layout.module.css';

export default function ProfileLayout({ children }) {
  return (
    <div className={styles.profileLayout}>
      <SubNavigation />
      <div className={styles.profileContent}>
        {children}
      </div>
    </div>
  );
}