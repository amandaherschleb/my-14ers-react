import React from 'react';
import { connect } from 'react-redux';
import Layout from './components/layout';
import { removePeak } from './../../modules/peaks/actions';
import { getSortedPeaks } from './../../modules/peaks/selectors';

export function PeakList(props) {
  return (
    <Layout {...props} />
  );
}

export const mapStateToProps = state => ({
  userPeaks: getSortedPeaks(state),
});

export const mapDispatchToProps = (dispatch) => {
  return {
    onDeletePeak: (token, peakID) => {
      dispatch(removePeak(token, peakID));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PeakList);
