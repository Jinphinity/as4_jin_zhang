// StAuth10222: I Jin Zhang, 000878821 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else.

import styles from '../../page.module.css';

export default function ItemDetail({ params }) {
  const { itemid } = params;

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.heading}>Item Detail</h1>
      <div className={styles.content}>
        <p>The id of the item is {itemid}</p>
      </div>
    </div>
  );
}