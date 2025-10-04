// DynamicCard.jsx
import React from 'react';
import styles from './DynamicCard.module.css';

function DynamicCard({ title, content, status }) {
  const getStatusClass = () => {
    switch (status) {
      case 'success':
        return styles.success;
      case 'warning':
        return styles.warning;
      case 'error':
        return styles.error;
      default:
        return '';
    }
  };

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.content}>{content}</p>
      <span className={`${styles.status} ${getStatusClass()}`}>{status}</span>
    </div>
  );
}

export default DynamicCard;