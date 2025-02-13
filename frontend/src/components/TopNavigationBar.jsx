import React from 'react';
import DarkModeToggle from './DarkModeToggle';
import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = ({
  topics,
  favouritedPhotos,
  fetchPhotosByTopic,
  isDarkMode,
  toggleDarkMode,
}) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} fetchPhotosByTopic={fetchPhotosByTopic} />
      <div className="top-nav-bar__actions">
        <DarkModeToggle isDarkMode={isDarkMode} onToggle={toggleDarkMode} />
        <FavBadge isFavPhotoExist={favouritedPhotos.length > 0} />
      </div>
    </div>
  );
};

export default TopNavigation;
