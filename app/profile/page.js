// StAuth10222: I Jin Zhang, 000878821 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else.

import Image from 'next/image';
import styles from './layout.module.css';

export default function ProfileDetails() {
  return (
    <>
      <h1 className={styles.profileHeading}>Profile Details</h1>
      <p className={styles.profileText}>
        Welcome to your profile details page. Here you can view and manage your personal information and account details.
      </p>
      <p className={styles.profileText}>
        Your profile contains important information about your account preferences, personal settings, and activity history. 
        You can navigate between different sections using the menu on the left to access settings and posts.
      </p>
      <div className={styles.imageContainer}>
        <Image
          src="/next.svg"
          alt="Profile Image"
          width={150}
          height={30}
          priority
        />
      </div>
      <p className={styles.profileText}>
        This details section provides an overview of your account information. Use the navigation on the left to explore other sections of your profile.
      </p>
    </>
  );
}