// StAuth10222: I Jin Zhang, 000878821 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else.

import Link from 'next/link';
import styles from './Item.module.css';

export default function Item({ id, text, datetime, author }) {
  return (
    <div className={styles.item}>
      <div className={styles.itemText}>
        {text}
      </div>
      <div className={styles.itemMeta}>
        <span className={styles.itemAuthor}>By {author}</span>
        <span className={styles.itemDatetime}>{datetime}</span>
      </div>
      <Link href={`/feed/${id}`} className={styles.itemLink}>
        item
      </Link>
    </div>
  );
}