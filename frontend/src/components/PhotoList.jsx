import React from 'react';
import PhotoListItem from './PhotoListItem';

import '../styles/PhotoList.scss';

const PhotoList = ({ photos, toggleFavourite, handlePhotoClick }) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          toggleFavourite={toggleFavourite}
          handlePhotoClick={handlePhotoClick}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
