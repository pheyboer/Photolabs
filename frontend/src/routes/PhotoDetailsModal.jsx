import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ photo, closeModal }) => {
  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={closeModal}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      {/* <img
        className="photo-details-modal__image"
        src={photo.urls.regular}
        alt="Selected"
      /> */}
    </div>
  );
};

export default PhotoDetailsModal;
