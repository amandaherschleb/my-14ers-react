import React from 'react';
import { connect } from 'react-redux';
import { loginWithFacebook } from './../../modules/auth/actions';
import Layout from './components/layout';

export function Login(props) {
  return (
    <Layout {...props} />
  );
}

export const mapStateToProps = state => ({
  loggedIn: state.app.auth.currentUser !== null,
  loading: state.app.auth.loading
});

export const mapDispatchToProps = (dispatch) => {
  return {
    onLoginWithFacebook: (facebookRes) => {
      dispatch(loginWithFacebook(facebookRes));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
