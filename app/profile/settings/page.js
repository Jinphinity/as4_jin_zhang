// StAuth10222: I Jin Zhang, 000878821 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else.

import Image from 'next/image';
import styles from '../layout.module.css';

export default function ProfileSettings() {
  return (
    <>
      <h1 className={styles.profileHeading}>Profile Settings</h1>
      <p className={styles.profileText}>
        Manage your account settings and preferences here. You can customize your experience and update your account information.
      </p>
      <div className={styles.imageContainer}>
        <Image
          src="/vercel.svg"
          alt="Settings Icon"
          width={120}
          height={24}
          priority
        />
      </div>
      <p className={styles.profileText}>
        Settings include notification preferences, privacy controls, security options, and other account configurations. 
        Any changes you make here will be saved automatically.
      </p>
      <p className={styles.profileText}>
        Use this section to personalize your experience and ensure your account security meets your needs.
      </p>
    </>
  );
}