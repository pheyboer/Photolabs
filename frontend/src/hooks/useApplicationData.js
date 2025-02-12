import { useEffect, useReducer } from 'react';
import axios from 'axios';

//action types
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  SET_PHOTO_BY_TOPIC: 'SET_PHOTOS_BY_TOPIC',
  SET_ERROR: 'SET_ERROR',
};

// initial state
const initialState = {
  photos: [],
  topics: [],
  selectedPhoto: null,
  favouritedPhotos: [],
  error: null, //state for error handling
};

//reducer function

const reducer = (state, action) => {
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

    case ACTIONS.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      throw new Error(
        `Tried to reduce with an unsupported action type: ${action.type}`
      );
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8001';

  //load the initial data
  useEffect(() => {
    // Fetch topics
    axios
      .get(`${apiUrl}/api/topics`)
      .then((response) => {
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: response.data });
      })
      .catch((error) => {
        dispatch({
          type: ACTIONS.SET_ERROR,
          payload: 'Failed to fetch topics, sorry',
        });
      });

    // Fetch photos
    axios
      .get(`${apiUrl}/api/photos`)
      .then((response) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: response.data });
      })
      .catch((error) => {
        dispatch({
          type: ACTIONS.SET_ERROR,
          payload: 'Failed to fetch photos, sorry',
        });
      });
  }, []);

  //get similar photos
  const getSimilarPhotos = (photoId) => {
    return state.photos.filter((p) => p.id !== photoId).slice(0, 6); // 6 similar photos
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
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS });
  };

  //toggling favourite photo
  const updateToFavPhotoIds = (photoId) => {
    if (state.favouritedPhotos.includes(photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: photoId });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: photoId });
    }
  };

  return {
    state,
    setPhotoSelected,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;
