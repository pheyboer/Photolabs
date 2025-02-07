import React from 'react';
import PhotoListItem from './PhotoListItem';

import '../styles/PhotoList.scss';

const PhotoList = ({ photos, favouritedPhotos, toggleFavourite, handlePhotoClick }) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          favouritedPhotos={favouritedPhotos}
          toggleFavourite={toggleFavourite}
          handlePhotoClick={handlePhotoClick}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
