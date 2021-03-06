import React from 'react';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import { ClipLoader } from 'react-spinners';
import SignUpForm from './sign-up-form';
import { FACEBOOK_APP_ID } from './../../../config';

export default function Layout(props) {
  if (props.loggedIn) {
    return (
      <Redirect to="/dashboard" />
    );
  }
  return (
    <main role="main" className="sign-up-container">
      <Col md={4} mdOffset={4} xs={10} xsOffset={1} className="form-container">
        <Col xs={12}>
          <ClipLoader
            color="#1E4899"
            loading={props.loading}
          />
        </Col>

        <SignUpForm {...props} />

        <Col xs={12}>
          <hr className="divider" />
          <FacebookLogin
            appId={FACEBOOK_APP_ID}
            version="2.12"
            fields="name,email"
            callback={props.onSignupWithFacebook}
            textButton="Sign up with Facebook"
            cssClass="facebook-btn"
            icon="fa-facebook"
          />
        </Col>
      </Col>
    </main>
  );
}

Layout.propTypes = {
  loggedIn: PropTypes.bool,
  loading: PropTypes.bool,
  onSignupWithFacebook: PropTypes.func
};

Layout.defaultProps = {
  loggedIn: false,
  loading: false
};
