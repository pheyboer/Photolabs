import { useState, useEffect, useReducer } from 'react';
import axios from 'axios';

//action types
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
};

// initial state
const initialState = {
  photos: [],
  topics: [],
  selectedPhoto: null,
  favouritedPhotos: [],
};

//reducer function

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favouritedPhotos: [...state.favouritedPhotos, action.payload],
      };

    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favouritedPhotos: state.favouritedPhotos.filter(
          (id) => id !== action.payload
        ),
      };

    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photos: action.payload,
      };

    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topics: action.payload,
      };

    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        selectedPhoto: action.payload,
      };

    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return {
        ...state,
        selectedPhoto: null,
      };

    default:
      throw new Error(
        `Tried to reduce with an unsupported action type: ${action.type}`
      );
  }
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8001';

  // const [photos, setPhotos] = useState([]);
  // const [topics, setTopics] = useState([]);
  // const [selectedPhoto, setSelectedPhoto] = useState(null);
  // const [favouritedPhotos, setFavouritedPhotos] = useState([]);

  //load the initial data
  useEffect(() => {
    // Fetch topics
    axios
      .get(`${apiUrl}/api/topics`)
      .then((response) =>
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: response.data })
      )
      .catch((error) => {
        console.error('Topics API Error:', error.message);
      });

    // Fetch photos
    axios
      .get(`${apiUrl}/api/photos`)
      .then((response) =>
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: response.data })
      )
      .catch((error) => {
        console.error('Photos API Error:', error.message);
      });
  }, []);

  //get similar photos
  const getSimilarPhotos = (photoId) => {
    return state.photos.filter(p => p.id !== photoId).slice(0, 6); // 6 similar photos
  };

  //open modal when photo is selected
  const setPhotoSelected = (photo) => {
    dispatch({
      type: ACTIONS.SELECT_PHOTO,
      payload: { ...photo, similarPhotos: getSimilarPhotos(photo.id) },
    });
  };

  //close details modal
  const onClosePhotoDetailsModal = () => {
    setSelectedPhoto(null);
  };

  //toggling favourite photo
  const updateToFavPhotoIds = (photoId) => {
    setFavouritedPhotos((prev) => {
      const isFav = prev.includes(photoId);
      return isFav ? prev.filter((id) => id !== photoId) : [...prev, photoId];
    });
  };

  const state = {
    photos,
    topics,
    selectedPhoto,
    favouritedPhotos,
  };

  return {
    state,
    setPhotoSelected,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;
