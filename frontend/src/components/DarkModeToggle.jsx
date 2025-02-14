import React from 'react';
import '../styles/DarkModeToggle.scss';
import DarkModeIcon from './DarkModeIcon';

const DarkModeToggle = ({ isDarkMode, onToggle }) => {
  return (
    <button
      className="dark-mode-toggle"
      onClick={onToggle}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      <DarkModeIcon />
    </button>
  );
};

export default DarkModeToggle;
