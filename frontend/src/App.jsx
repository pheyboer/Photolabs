import React from 'react';

// import PhotoListItem from './components/PhotoListItem';
// import PhotoList from './components/PhotoList';
// import TopicList from './components/TopicList';
// import TopNavigationBar from './components/TopNavigationBar';
import HomeRoute from './routes/HomeRoute';

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
  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} />
    </div>
  );
};

export default App;
