import { useState, useEffect } from 'react';
import axios from 'axios';

//action types
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
};

//reducer function

const useApplicationData = () => {
  const [photos, setPhotos] = useState([]);
  const [topics, setTopics] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [favouritedPhotos, setFavouritedPhotos] = useState([]);
  //load the initial data
  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8001';

    // Fetch topics
    axios.get(`${apiUrl}/api/topics`)
      .then((response) => {
        console.log('Topics loaded:', response.data.length);
        setTopics(response.data);
      })
      .catch((error) => {
        console.error('Topics API Error:', error.message);
      });

    // Fetch photos
    axios.get(`${apiUrl}/api/photos`)
      .then((response) => {
        console.log('Photos loaded:', response.data.length);
        setPhotos(response.data);
      })
      .catch((error) => {
        console.error('Photos API Error:', error.message);
      });
  }, []);

  //get similar photos
  const getSimilarPhotos = (photoId) => {
    return photos
      .filter(p => p.id !== photoId)
      .slice(0, 6); // 6 similar photos
  };

  //open modal when photo is selected
  const setPhotoSelected = (photo) => {
    const photoWithSimilar = {
      ...photo,
      similarPhotos: getSimilarPhotos(photo.id)
    };
    setSelectedPhoto(photoWithSimilar);
  };

  //close details modal
  const onClosePhotoDetailsModal = () => {
    setSelectedPhoto(null);
  };

  //toggling favourite photo
  const updateToFavPhotoIds = (photoId) => {
    setFavouritedPhotos(prev => {
      const isFav = prev.includes(photoId);
      return isFav
        ? prev.filter(id => id !== photoId)
        : [...prev, photoId];
    });
  };

  const state = {
    photos,
    topics,
    selectedPhoto,
    favouritedPhotos
  };

  return {
    state,
    setPhotoSelected,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;
