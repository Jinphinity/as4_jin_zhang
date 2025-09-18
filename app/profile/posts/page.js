// StAuth10222: I Jin Zhang, 000878821 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else.

import Item from '@/components/Item';
import styles from '../layout.module.css';

export default function ProfilePosts() {
  const item_data = [
    {id: 1, text: "Great product", datetime: "September 14 2026 7:15am", author: "Joe"},   
    {id: 2, text: "Bad product", datetime: "September 13 2026 9:33pm", author: "Nageeb"},
    {id: 3, text: "This is great", datetime: "September 13 2026 4:45pm", author: "Mary"},
    {id: 4, text: "I don't like it", datetime: "September 12 2026 5:23pm", author: "Jane"},
    {id: 5, text: "It could be better", datetime: "September 12 2026 3:56am", author: "Yi"},
    {id: 6, text: "It's the worst", datetime: "September 12 2026 6:24pm", author: "Arif"},
    {id: 7, text: "Best ever", datetime: "September 10 2026 1:17pm", author: "Sally"},
    {id: 8, text: "It's OK", datetime: "September 9 2026 10:42am", author: "Kamala"}
  ];

  return (
    <>
      <h1 className={styles.profileHeading}>Your Posts</h1>
      <p className={styles.profileText}>
        Here are all your posts and contributions. Each post links back to the detailed view in the feed section.
      </p>
      <div style={{ marginTop: '2rem' }}>
        {item_data.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            text={item.text}
            datetime={item.datetime}
            author={item.author}
          />
        ))}
      </div>
    </>
  );
}