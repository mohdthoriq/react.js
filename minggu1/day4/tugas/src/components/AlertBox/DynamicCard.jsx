// DynamicCard.jsx
import React from 'react';
import styles from './DynamicCard.module.css';
import DynamicButton from './DynamicButton';

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
      <DynamicButton 
        variant={
           status === 'success' ? 'primary' :
          status === 'warning' ? 'secondary' :
          'danger'
        } 
        size="small" 
        onClick={() => alert(`Tombol ${status} ditekan`)}
      >
        {status}
      </DynamicButton>
    </div>
  );
}

export default DynamicCard;