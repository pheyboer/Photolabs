import React, { useEffect } from 'react';
import PhotoList from '../components/PhotoList';
import '../styles/PhotoDetailsModal.scss';
import PhotoFavButton from '../components/PhotoFavButton';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({
  photo,
  closeModal,
  toggleFavourite,
  favouritedPhotos,
}) => {
  //close modal if prop is null or undefined
  useEffect(() => {
    if (!photo) {
      closeModal();
    }
  }, [photo, closeModal]);

  if (!photo)
    return (
      <div className="photo-details-modal">
        <p className="photo-details-modal__loading">
          Sorry, photo details could not be loaded
        </p>
      </div>
    );

  //moved location logic outside of jsx
  const location = photo.location
    ? `${photo.location.city}, ${photo.location.country}`
    : 'Unknown Location';

  const isFavourited = favouritedPhotos.includes(photo.id);

  return (
    <div className="photo-details-modal">
      {/* close button for photo modal */}
      <button
        className="photo-details-modal__close-button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          console.log('Close button clicked');
          closeModal();
        }}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="photo-details-modal__image-container">
        {/* Selected photo */}
        <img
          className="photo-details-modal__image"
          src={photo.urls.regular}
          alt={`Selected photo by ${photo.user.name}`}
        />

        {/* favourite button */}
        <div className="photo-details-modal__fav-icon">
          <PhotoFavButton
            selected={isFavourited}
            onFavouriteToggle={() => toggleFavourite(photo.id)}
          />
        </div>
      </div>

      {/* Photographer details */}
      <div className="photo-details-modal__photographer-details">
        <img
          className="photo-details-modal__photographer-profile"
          src={photo.user.profile}
          alt={`Profile picture of ${photo.user.name}`}
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
      <h3 className="photo-details-modal__header">Related Photos</h3>
      {photo.similarPhotos === undefined ? (
        <p className="photo-details-modal__loading">
          Fetching similar photos...
        </p>
      ) : photo.similarPhotos &&
        Object.values(photo.similarPhotos).length > 0 ? (
        <PhotoList
          photos={Object.values(photo.similarPhotos)}
          favouritedPhotos={favouritedPhotos}
          toggleFavourite={toggleFavourite}
          handlePhotoClick={setPhotoSelected}
        />
      ) : (
        <p className="photo-details-modal__no-similar-photos">
          No similar photos available.
        </p>
      )}
    </div>
  );
};

export default PhotoDetailsModal;
