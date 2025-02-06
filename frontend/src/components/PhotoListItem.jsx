import React from 'react';

import '../styles/PhotoListItem.scss';

const PhotoListItem = ({ username, imageSource, id, location, profile }) => {
  return (
    <div key={id}>
      <img src={imageSource} />
      <div>
        <img src={profile} />
        <div>
          <p>{username}</p>
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
