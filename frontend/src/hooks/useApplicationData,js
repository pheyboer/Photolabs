import { useState, useEffect } from 'react';
import axios from 'axios';

const useApplicationData = () => {
  const [state, setState] = useState({
    photos: [],
    topics: [],
    selectedPhoto: null,
    favouritedPhotos: [],
  });

  //load the initial data
  useEffect(() => {
    Promise.all([axios.get('api/photos'), axios.get('api/topics')]).then(
      ([photoRes, topicsRes]) => {
        setState((prev) => ({
          ...prev,
          photos: photoRes.data,
          topics: topicsRes.data,
        }));
      }
    );
  }, []);

  //open modal when photo is selected
  const setPhotoSelected = (photo) => {
    setState((prev) => ({ ...prev, selectedPhoto: photo }));
  };

  //close details modal
  const onClosePhotoDetailsModal = () => {
    setState((prev) => ({ ...prev, selectedPhoto: null }));
  };

  //toggling favourite photo
  const updateToFavPhotoIds = (photoId) => {
    setState((prev) => {
      const isFav = prev.favouritedPhotos.includes(photoId);
      return {
        ...prev,
        favouritedPhotos: isFav
          ? prev.favouritedPhotos.filter((id) => id !== photoId)
          : [...prev.favouritedPhotos, photoId],
      };
    });
  };

  return { state, setPhotoSelected, updateToFavPhotoIds, onClosePhotoDetailsModal };
};

export default useApplicationData;