import React, { useCallback } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

//using function expression for component eslint
const PhotoFavButton = ({ selected, onFavouriteToggle }) => {
  //toggle state
  const handleClick = useCallback(() => {
    if (onFavouriteToggle) {
      onFavouriteToggle();
    }
  }, [onFavouriteToggle]);

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div
        className={`photo-list__fav-icon-svg ${
          selected ? 'favourited' : ''
        }`}
      >
        <FavIcon selected={selected} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
