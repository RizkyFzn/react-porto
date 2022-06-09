import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <>
      <section class="top-nav">
        <div></div>
        <input id="menu-toggle" type="checkbox" />
        <label class="menu-button-container" for="menu-toggle">
          <div class="menu-button"></div>
        </label>
        <ul class="menu">
          <li>
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/about" className="link">
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="link">
              PORTFOLIO
            </Link>
          </li>
          <li>
            <a href="https://mail.google.com/mail/u/0/?fs=1&to=rfauzan211@gmail.com&tf=cm" className="link hire" target="_blank" rel="noreferrer">
              HIRE ME
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Navbar;
