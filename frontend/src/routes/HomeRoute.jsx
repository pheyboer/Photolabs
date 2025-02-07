import React from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics, favouritedPhotos, toggleFavourite }) => {

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favouritedPhotos={favouritedPhotos} />
      <PhotoList photos={photos} favouritedPhotos={favouritedPhotos} toggleFavourite={toggleFavourite} />
    </div>
  );
};

export default HomeRoute;
