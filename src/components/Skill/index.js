import React from 'react';
import './Skill.css';

function Skill() {
  return (
    <>
      <h1 className="title">Skill</h1>
      <div className="skill-wrapper">
        <div class="skill-bars">
          <div class="bar">
            <div class="info">
              <span>HTML</span>
            </div>
            <div class="progress-line html">
              <span></span>
            </div>
          </div>
          <div class="bar">
            <div class="info">
              <span>CSS</span>
            </div>
            <div class="progress-line css">
              <span></span>
            </div>
          </div>
          <div class="bar">
            <div class="info">
              <span>Javascript</span>
            </div>
            <div class="progress-line js">
              <span></span>
            </div>
          </div>
          <div class="bar">
            <div class="info">
              <span>Adobe Illustrator</span>
            </div>
            <div class="progress-line ai">
              <span></span>
            </div>
          </div>
          <div class="bar">
            <div class="info">
              <span>Figma</span>
            </div>
            <div class="progress-line figma">
              <span></span>
            </div>
          </div>
          <div class="bar">
            <div class="info">
              <span>Adobe XD</span>
            </div>
            <div class="progress-line xd">
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skill;
