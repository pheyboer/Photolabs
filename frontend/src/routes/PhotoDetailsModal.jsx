import React from 'react';
import PhotoList from '../components/PhotoList';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ photo, closeModal }) => {
  if (!photo) return null;

  //console log photo details
  // console.log('Photo Details Passed to Modal:', {
  //   id: photo.id,
  //   imageUrl: photo.urls.regular,
  //   photographerName: photo.user.name,
  //   photographerProfile: photo.user.profile,
  //   location: photo.location
  //     ? `${photo.location.city}, ${photo.location.country}`
  //     : 'Unknown Location',
  // });

  //moved location outside of jsx
  const location = photo.location
    ? `${photo.location.city}, ${photo.location.country}`
    : 'Unknown Location';

  return (
    <div className="photo-details-modal">
      {/* close button for photo modal */}
      <button
        className="photo-details-modal__close-button"
        onClick={closeModal}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>

      {/* Selected photo */}
      <img
        className="photo-details-modal__image"
        src={photo.urls.regular}
        alt="Selected"
      />

      {/* Photographer details */}
      <div className="photo-details-modal__photographer-details">
        <img
          className="photo-details-modal__photographer-profile"
          src={photo.user.profile}
          alt="Profile"
        />
        <div className="photo-details-modal__photographer-info">
          <p className="photo-details-modal__photographer-name">
            {photo.user.name}
          </p>
          <p className="photo-details-modal__photographer-location">
            {location}
          </p>
        </div>
      </div>

      {/* Similar photos section */}
      <h3 className="photo-details-modal__header">Similar Photos</h3>
      {photo.similarPhotos?.length > 0 ? (
        <PhotoList photos={photo.similarPhotos} />
      ) : (
        <p>No similar photos available.</p>
      )}
    </div>
  );
};

export default PhotoDetailsModal;
