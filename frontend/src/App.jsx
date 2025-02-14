import React from 'react';

import HomeRoute from './routes/HomeRoute';
import useApplicationData from './hooks/useApplicationData';
import PhotoDetailsModal from './routes/PhotoDetailsModal';

import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    state,
    setPhotoSelected,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    fetchPhotosByTopic,
    toggleDarkMode,
  } = useApplicationData();

  const { photos, favouritedPhotos, selectedPhoto, isDarkMode } = state;

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      <HomeRoute
        photos={photos}
        topics={state.topics}
        favouritedPhotos={favouritedPhotos}
        toggleFavourite={updateToFavPhotoIds}
        handlePhotoClick={setPhotoSelected}
        fetchPhotosByTopic={fetchPhotosByTopic}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />

      {selectedPhoto && (
        <PhotoDetailsModal
          photo={selectedPhoto}
          closeModal={onClosePhotoDetailsModal}
          toggleFavourite={updateToFavPhotoIds}
          favouritedPhotos={favouritedPhotos}
          onPhotoSelect={setPhotoSelected}
        />
      )}
    </div>
  );
};

export default App;
