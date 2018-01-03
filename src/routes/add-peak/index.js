import React from 'react';
import { connect } from 'react-redux';
import Layout from './components/layout';

export function AddPeak(props) {
  return (
    <Layout {...props} />
  );
}

export const mapStateToProps = state => ({
  allPeaks: state.app.peaks.allPeaks,
});

export default connect(mapStateToProps)(AddPeak);
