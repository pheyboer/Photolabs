import React, { useState, useCallback } from 'react';
import PhotoFavButton from './PhotoFavButton';

import '../styles/PhotoListItem.scss';

const PhotoListItem = ({ photo }) => {
  //favourite status from the photo object false
  const [isFavourited, setIsFavourited] = useState(photo.isFavourited || false);

  //function to toggle favourite status
  const handleFavouriteToggle = useCallback(() => {
    setIsFavourited((prevStatus) => !prevStatus);
  }, []);

  return (
    <div key={photo.id} className="photo-list__item">
      <PhotoFavButton
        selected={isFavourited}
        onFavouriteToggle={handleFavouriteToggle}
      />
      <img className="photo-list__image" src={photo.imageSource} alt="Photo" />
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={photo.profile}
          alt="Profile"
        />
        <div className="photo-list__user-info">
          <p className="photo-list__username">{photo.username}</p>
          <p className="photo-list__user-location">
            {photo.location.city}, {photo.location.country}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
