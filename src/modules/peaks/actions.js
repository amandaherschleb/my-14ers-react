import { getUserPeaksFromDB, addPeakToDB, removePeakFromDB } from './api';
import peakData from './all-peak-data';

const allPeaks = [...peakData];

// MAP ACTIONS
export const TOGGLE_INFO_WINDOW = 'TOGGLE_INFO_WINDOW';
export const toggleInfoWindow = (peakID, lat, lng) => ({
  type: TOGGLE_INFO_WINDOW,
  peakID,
  lat,
  lng,
});

export const CLOSE_INFO_WINDOW = 'CLOSE_INFO_WINDOW';
export const closeInfoWindow = () => ({
  type: CLOSE_INFO_WINDOW,
});

// GET USER PEAKS
export const GET_USER_PEAKS_REQUEST = 'GET_USER_PEAKS_REQUEST';
export const getUserPeaksRequest = () => ({
  type: GET_USER_PEAKS_REQUEST,
});

export const GET_USER_PEAKS_SUCCESS = 'GET_USER_PEAKS_SUCCESS';
export const getUserPeaksSuccess = userPeaks => ({
  type: GET_USER_PEAKS_SUCCESS,
  userPeaks,
});

export const GET_USER_PEAKS_ERROR = 'GET_USER_PEAKS_ERROR';
export const getUserPeaksError = error => ({
  type: GET_USER_PEAKS_ERROR,
  error,
});

export const getUserPeaks = (token, getPeaks = getUserPeaksFromDB) => (dispatch) => {
  // dispatch the request action to start the request
  dispatch(getUserPeaksRequest());
  // search for the users peaks in the database
  return getPeaks(token).then((userPeaks) => {
    // dispatch the success action and pass in the result from the db search on success
    dispatch(getUserPeaksSuccess(userPeaks));
  }).catch((err) => {
    // dispatch the error action if something goes wrong
    dispatch(getUserPeaksError(err));
  });
};

// ADD PEAK
export const ADD_PEAK_REQUEST = 'ADD_PEAK_REQUEST';
export const addPeakRequest = () => ({
  type: ADD_PEAK_REQUEST,
});

export const ADD_PEAK_SUCCESS = 'ADD_PEAK_SUCCESS';
export const addPeakSuccess = peak => ({
  type: ADD_PEAK_SUCCESS,
  peak,
});

export const ADD_PEAK_ERROR = 'ADD_PEAK_ERROR';
export const addPeakError = error => ({
  type: ADD_PEAK_ERROR,
  error,
});

export const addPeak = (token, peakName, dateClimbed, notes, addPeak = addPeakToDB) => (dispatch) => {
  // create newPeak to add using peak data from allPeaks
  const peakFromAllPeaks = allPeaks.filter(peak => peak.attributes.peak_name === peakName);
  //// NOTE: ID will be removed from here and added by the database
  const newPeak = {
    peakName: peakFromAllPeaks[0].attributes.peak_name,
    imgSrc: peakFromAllPeaks[0].attributes.imgSrc,
    id: peakFromAllPeaks[0].id,
    range: peakFromAllPeaks[0].attributes.range,
    rank: peakFromAllPeaks[0].attributes.rank,
    elevation: peakFromAllPeaks[0].attributes.elevation,
    latitude: parseFloat(peakFromAllPeaks[0].attributes.latitude, 10),
    longitude: parseFloat(peakFromAllPeaks[0].attributes.longitude, 10),
    dateClimbed,
    notes,
  };

  // dispatch the request action to start the request
  dispatch(addPeakRequest());
  // add new peak to user's peaks in DB
  return addPeak(token, newPeak).then((peak) => {
    // dispatch the success action and pass in the result from the db search on success
    dispatch(addPeakSuccess(peak));
  }).catch((err) => {
    // dispatch the error action if something goes wrong
    dispatch(addPeakError(err));
  });
};

// REMOVE PEAK
export const REMOVE_PEAK_REQUEST = 'REMOVE_PEAK_REQUEST';
export const removePeakRequest = () => ({
  type: REMOVE_PEAK_REQUEST,
});

export const REMOVE_PEAK_SUCCESS = 'REMOVE_PEAK_SUCCESS';
export const removePeakSuccess = peakID => ({
  type: REMOVE_PEAK_SUCCESS,
  peakID,
});

export const REMOVE_PEAK_ERROR = 'REMOVE_PEAK_ERROR';
export const removePeakError = error => ({
  type: REMOVE_PEAK_ERROR,
  error,
});

export const removePeak = (token, peakID, removePeak = removePeakFromDB) => (dispatch) => {
  // dispatch the request action to start the request
  dispatch(removePeakRequest());
  // remove peak from user's peaks in DB
  return removePeak(token, peakID).then(() => {
    // dispatch the success action and pass in the result from the db search on success
    dispatch(removePeakSuccess(peakID));
  }).catch((err) => {
    // dispatch the error action if something goes wrong
    dispatch(removePeakError(err));
  });
};
