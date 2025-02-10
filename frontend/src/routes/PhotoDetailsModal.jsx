import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ photo, closeModal }) => {

  console.log('Photo Details Passed to Modal:', {
    id: photo.id,
    imageUrl: photo.urls.regular,
    photographerName: photo.user.name,
    photographerProfile: photo.user.profile,
    location: photo.location ? `${photo.location.city}, ${photo.location.country}` : 'Unknown Location',
  });
  
  return (
    <div className="photo-details-modal">
      {/* close button for photo modal */}
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
