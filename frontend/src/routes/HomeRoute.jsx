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
}) => {
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favouritedPhotos={favouritedPhotos} />
      <PhotoList
        photos={photos}
        toggleFavourite={toggleFavourite}
        handlePhotoClick={handlePhotoClick}
      />
    </div>
  );
};

export default HomeRoute;
