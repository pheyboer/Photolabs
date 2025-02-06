import React from 'react';

import '../styles/PhotoListItem.scss';

const PhotoListItem = ({ photo }) => {
  return (
    <div key={photo.id} className="photo-list__item">
      <img className="photo-list__image" src={photo.imageSource} alt="Photo" />
      <div className="photo-list__details">
        <img
          className="photo-list__profile"
          src={photo.profile}
          alt="Profile"
        />
        <div className="photo-list__info">
          <p className="photo-list__username">{photo.username}</p>
          <p className="photo-list__location">
            {photo.location.city}, {photo.location.country}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
