import React, { useState } from 'react';

// import PhotoListItem from './components/PhotoListItem';
// import PhotoList from './components/PhotoList';
// import TopicList from './components/TopicList';
// import TopNavigationBar from './components/TopNavigationBar';
import HomeRoute from './routes/HomeRoute';
import useApplicationData from "./hooks/useApplicationData";
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
  const {
    state,
    setPhotoSelected,
    updateToFavPhotoId,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  const { photos, favouritedPhotos, selectedPhoto } = state;


  // const [favouritedPhotos, setFavouritedPhotos] = useState([]);
  // const [modalOpen, setModalOpen] = useState(false);
  // const [selectedPhoto, setSelectedPhoto] = useState(null);

  // const toggleFavourite = (photoId) => {
  //   console.log(`Toggling favourite for photo ID: ${photoId}`); // Debugging
  //   setFavouritedPhotos((prev) => {
  //     if (prev.includes(photoId)) {
  //       return prev.filter((id) => id !== photoId);
  //     } else {
  //       return [...prev, photoId];
  //     }
  //   });
  // };

  // const getSimilarPhotos = (photoId) => {
  //   return photos.filter((p) => p.id !== photoId).slice(0, 6);
  // };

  // const handlePhotoClick = (photo) => {
  //   setSelectedPhoto({ ...photo, similarPhotos: getSimilarPhotos(photo.id) });
  //   // setSelectedPhoto(photo);
  //   setModalOpen(true);
  // };

  // //function that sets modelOpen state to false and selectedPhoto to null.
  // //then passed as prop to PhotoDetailsModal
  // const closeModal = () => {
  //   console.log("Closing modal...");
  //   setModalOpen(false);
  //   setSelectedPhoto(null);
  // };

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={state.topics}
        favouritedPhotos={favouritedPhotos}
        toggleFavourite={updateToFavPhotoId}
        handlePhotoClick={setPhotoSelected}
      />

      {selectedPhoto && (
        <PhotoDetailsModal
          photo={selectedPhoto}
          closeModal={onClosePhotoDetailsModal}
          toggleFavourite={updateToFavPhotoId}
          favouritedPhotos={favouritedPhotos}
        />
      )}
    </div>
  );
};

export default App;
