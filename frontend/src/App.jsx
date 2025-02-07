import React, { useState } from 'react';

// import PhotoListItem from './components/PhotoListItem';
// import PhotoList from './components/PhotoList';
// import TopicList from './components/TopicList';
// import TopNavigationBar from './components/TopNavigationBar';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';

import photos from './mocks/photos'; // Import mock photos
import topics from './mocks/topics'; // Import mock topics

import './App.scss';

// const sampleDataForPhotoListItem = {
//   id: '1',
//   location: {
//     city: 'Montreal',
//     country: 'Canada',
//   },
//   imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//   username: 'Joe Example',
//   profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
// };

// // Array helper method
// const photos = new Array(3).fill(sampleDataForPhotoListItem);

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [favouritedPhotos, setFavouritedPhotos] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const toggleFavourite = (photoId) => {
    console.log(`Toggling favourite for photo ID: ${photoId}`); // Debugging
    setFavouritedPhotos((prev) => {
      const newState = prev.includes(photoId)
        ? prev.filter((id) => id !== photoId)
        : [...prev, photoId];
      console.log("Updated favouritedPhotos:", newState); // Logging
      return newState;
    });
  };

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedPhoto(null);
  };

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        favouritedPhotos={favouritedPhotos}
        toggleFavourite={toggleFavourite}
        handlePhotoClick={handlePhotoClick}
      />

      {modalOpen && (
        <PhotoDetailsModal photo={selectedPhoto} closeModal={closeModal} />
      )}
    </div>
  );
};

export default App;
