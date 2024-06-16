import React from 'react';
import styles from '../../css/Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <span className="text-muted">© 2024 Your Company</span>
      </div>
    </footer>
  );
}

export default Footer