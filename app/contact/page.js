// StAuth10222: I Jin Zhang, 000878821 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else.

import styles from '../page.module.css';

export default function Contact() {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.heading}>Contact</h1>
      <div className={styles.content}>
        <p>
          Get in touch with us! We&apos;d love to hear from you and answer any questions you may have about our application.
        </p>
        <div className={styles.spacedSection}>
          <h3>Contact Information</h3>
          <p><strong>Email:</strong> info@mywebapp.com</p>
          <p><strong>Phone:</strong> (555) 123-4567</p>
          <p><strong>Address:</strong> 123 Web Development St, Digital City, DC 12345</p>
        </div>
        <div className={styles.spacedSection}>
          <h3>Business Hours</h3>
          <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
          <p><strong>Saturday:</strong> 10:00 AM - 4:00 PM</p>
          <p><strong>Sunday:</strong> Closed</p>
        </div>
        <p className={styles.spacedSection}>
          Feel free to reach out to us through any of the above channels. We strive to respond to all inquiries within 24 hours.
        </p>
      </div>
    </div>
  );
}