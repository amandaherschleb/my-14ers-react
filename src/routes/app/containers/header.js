import React from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { setCurrentUser, setAuthToken } from './../../../modules/auth/actions';
import { clearUserPeaks} from './../../../modules/peaks/actions';
import { clearAuthToken } from './../../../utils/local-storage';
import './header.css';

export default function Header(props) {
  function logOut() {
    props.dispatch(setCurrentUser(null));
    props.dispatch(setAuthToken(null));
    clearAuthToken();
    props.dispatch(clearUserPeaks());
  }

  if (props.loggedIn) {
    return (
      <Navbar fixedTop collapseOnSelect className="nav-loggedin">
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              <img
                src="https://res.cloudinary.com/amhprojects/image/upload/v1518971749/14ers/logo-new.png"
                alt="my14ers"
                className="logo-img"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer to="/dashboard">
              <NavItem eventKey={1}>Dashboard</NavItem>
            </LinkContainer>

            <LinkContainer to="/add-peak">
              <NavItem eventKey={2}>Add Peak</NavItem>
            </LinkContainer>

            <LinkContainer to="/peak-list">
              <NavItem eventKey={3}>Peak List</NavItem>
            </LinkContainer>

            <LinkContainer to="/peak-map">
              <NavItem eventKey={4}>Peak Map</NavItem>
            </LinkContainer>

            <LinkContainer to="/logout">
              <NavItem eventKey={5} onClick={logOut}>Logout</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
  return (
    <Navbar fixedTop collapseOnSelect className="nav-not-loggedin">
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">
            <img
              src="https://res.cloudinary.com/amhprojects/image/upload/v1518745648/14ers/logo.png"
              alt="my14ers"
              className="logo-img"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <LinkContainer to="/login">
            <NavItem eventKey={2}>Login</NavItem>
          </LinkContainer>

          <LinkContainer to="/sign-up">
            <NavItem eventKey={3}>Sign Up</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

Header.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  dispatch: PropTypes.func
};
