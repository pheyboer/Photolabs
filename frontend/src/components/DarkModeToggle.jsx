import React from 'react';
import '../styles/DarkModeToggle.scss';

const DarkModeToggle = ({ isDarkMode, onToggle }) => {
  return (
    <button
      className="dark-mode-toggle"
      onClick={onToggle}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      {isDarkMode ? '☀️' : '🌙'}
    </button>
  );
};

export default DarkModeToggle;
