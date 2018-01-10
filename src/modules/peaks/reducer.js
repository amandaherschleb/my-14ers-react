import { TOGGLE_INFO_WINDOW, CLOSE_INFO_WINDOW } from './actions';
import peakData from './all-peak-data';

const allPeaks = [...peakData];

const initialState = {
  showInfoWindowID: null,
  allPeaks,
  mapCenter: { lat: 39.0051, lng: -105.5197 },
  userPeaks: [
    {
      imgSrc: 'https://res.cloudinary.com/amhprojects/image/upload/v1514516749/14ers/mt_elbert.jpg',
      peak_name: 'Mt. Elbert',
      range: 'Sawatch Range',
      rank: 1,
      elevation: 14433,
      towns: 'Leadville, Twin Lakes, Aspen',
      latitude: 39.117777777777775,
      longitude: -106.44472222222223,
      dateClimbed: '07-07-2017',
      notes: 'it was fun',
      id: 1,
    },
    {
      imgSrc: 'https://res.cloudinary.com/amhprojects/image/upload/v1514516746/14ers/blanca.jpg',
      peak_name: 'Blanca Peak',
      range: 'Sangre de Cristo',
      rank: 4,
      elevation: 14345,
      towns: 'Fort Garland, Blanca, Alamosa',
      latitude: 37.577222222222225,
      longitude: -105.48527777777778,
      dateClimbed: '10-15-2016',
      notes: 'very cold',
      id: 2,
    },
    {
      imgSrc: 'https://res.cloudinary.com/amhprojects/image/upload/v1514516757/14ers/torreys.jpg',
      peak_name: 'Torreys Peak',
      range: 'Front Range',
      rank: 11,
      elevation: 14267,
      towns: 'Bakerville, Montezuma, Keystone',
      latitude: 39.64277777777778,
      longitude: -105.82083333333333,
      dateClimbed: '09-20-2016',
      notes: 'yay hiking',
      id: 3,
    },
    {
      imgSrc: 'https://res.cloudinary.com/amhprojects/image/upload/v1514516747/14ers/castle.jpg',
      peak_name: 'Castle Peak',
      range: 'Elk Mountains',
      rank: 12,
      elevation: 14265,
      towns: 'Ashcroft, Crested Butte, Aspen',
      latitude: 39.00972222222222,
      longitude: -106.86138888888888,
      dateClimbed: '08-20-2016',
      notes: 'first attempt',
      id: 4,
    },
    {
      imgSrc: 'https://res.cloudinary.com/amhprojects/image/upload/v1514516747/14ers/castle.jpg',
      peak_name: 'Castle Peak',
      range: 'Elk Mountains',
      rank: 12,
      elevation: 14265,
      towns: 'Ashcroft, Crested Butte, Aspen',
      latitude: 39.00972222222222,
      longitude: -106.86138888888888,
      dateClimbed: '08-20-2017',
      notes: 'fun hike, made it this time',
      id: 5,
    },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
  case TOGGLE_INFO_WINDOW:
    return {
      ...state,
      showInfoWindowID: action.peakID === state.showInfoWindowID ? null : action.peakID,
      mapCenter: { lat: action.lat, lng: action.lng },
    };

  case CLOSE_INFO_WINDOW:
    return {
      ...state,
      showInfoWindowID: null,
    };

  default:
    return state;
  }
}
