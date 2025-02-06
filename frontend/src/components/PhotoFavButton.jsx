import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

//using function expression for component eslint
const PhotoFavButton = () => {
  //state for favouriting picture
  const [isFavourite, setIsFavourite] = useState(false);

  //toggle state
  const toggleFavourite = useCallback(() => {
    setIsFavourite((prevState) => !prevState);
  }, []);

  return (
    <div className="photo-list__fav-icon" onClick={toggleFavourite}>
      <div
        className={`photo-list__fav-icon-svg ${
          isFavourite ? 'favourited' : ''
        }`}
      >
        <FavIcon selected={isFavourite} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
