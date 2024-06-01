import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import Header from '../Header';
const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark-mode') {
      setDarkMode(true);
      document.body.classList.add(styles.darkMode);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.body.classList.add(styles.darkMode);
        localStorage.setItem('theme', 'dark-mode');
      } else {
        document.body.classList.remove(styles.darkMode);
        localStorage.removeItem('theme');
      }
      return newMode;
    });
  };

  return (
    <div className={styles.container}>
      <button className={styles.toggleButton} onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};

export default DarkModeToggle;
