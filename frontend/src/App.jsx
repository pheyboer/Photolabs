import React from 'react';

import HomeRoute from './routes/HomeRoute';
import useApplicationData from "./hooks/useApplicationData";
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
  } = useApplicationData();

  const { photos, favouritedPhotos, selectedPhoto } = state;

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={state.topics}
        favouritedPhotos={favouritedPhotos}
        toggleFavourite={updateToFavPhotoIds}
        handlePhotoClick={setPhotoSelected}
        fetchPhotosByTopic={fetchPhotosByTopic}
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
