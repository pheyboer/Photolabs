import React from 'react';

import '../styles/PhotoListItem.scss';

const PhotoListItem = ({ photo }) => {
  return (
    <div key={photo.id}>
      <img src={photo.imageSource} />
      <div>
        <img src={photo.profile} />
        <div>
          <p>{photo.username}</p>
          <p>{photo.location.city}, {photo.location.country}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
