import React from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({
  photos,
  topics,
  favouritedPhotos,
  toggleFavourite,
  handlePhotoClick,
  fetchPhotosByTopic,
  isDarkMode,
  toggleDarkMode,
}) => {
  return (
    <div className="home-route">
      <TopNavigationBar
        topics={topics}
        favouritedPhotos={favouritedPhotos}
        fetchPhotosByTopic={fetchPhotosByTopic}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <PhotoList
        photos={photos}
        favouritedPhotos={favouritedPhotos}
        toggleFavourite={toggleFavourite}
        handlePhotoClick={handlePhotoClick}
      />
    </div>
  );
};

export default HomeRoute;
