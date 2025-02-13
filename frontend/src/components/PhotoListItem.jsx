import React, { useCallback } from 'react';
import PhotoFavButton from './PhotoFavButton';

import '../styles/PhotoListItem.scss';

const PhotoListItem = ({
  photo,
  toggleFavourite,
  handlePhotoClick,
  favouritedPhotos = [],
}) => {
  const isFavourited = favouritedPhotos.includes(photo.id);

  //function to toggle favourite status
  const handleFavouriteToggle = useCallback(() => {
    toggleFavourite(photo.id);
  }, [toggleFavourite, photo.id]);

  return (
    <div key={photo.id} className="photo-list__item">
      <PhotoFavButton
        selected={isFavourited}
        onFavouriteToggle={handleFavouriteToggle}
      />
      <img
        className="photo-list__image"
        src={photo.urls.regular}
        alt="Photo"
        onClick={() => handlePhotoClick(photo)}
      />
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={photo.user.profile}
          alt="Profile"
        />
        <div className="photo-list__user-info">
          <p className="photo-list__username">{photo.user.name}</p>
          <p className="photo-list__user-location">
            {photo.location.city}, {photo.location.country}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
