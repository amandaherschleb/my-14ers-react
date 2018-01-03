import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Button } from 'react-bootstrap';
import './layout.css';

export default function Layout() {
  return (
    <main role="main">
      <Jumbotron />

      <div className="container">
        <p>
          Track the Colorado 14ers you have hiked now!
        </p>

        <Link to="/sign-in" className="home-page-button">
          <Button id="sign-in-button">Sign In</Button>
        </Link>

        <Link to="/sign-up" className="home-page-button">
          <Button id="sign-up-button">Sign Up</Button>
        </Link>
      </div>
    </main>
  );
}
