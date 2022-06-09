import React, { Component } from 'react';
import CV from './CV.pdf';
import './Cv.css';

class Download extends Component {
  render() {
    return (
      <div className="App">
        <a href={CV} target="_blank" rel="noreferrer">
          Download CV
        </a>
      </div>
    );
  }
}

export default Download;
