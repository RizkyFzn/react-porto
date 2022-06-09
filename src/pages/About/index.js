import React, { useEffect } from 'react';
import './About.css';
import { TitleFoto, sert1, sert2, sert3, sert4 } from '../../img';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faCakeCandles, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Skill from '../../components/Skill';

function About() {
  const title = 'About | Ahmad Rizky Fauzan';
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <>
      <div className="abt">
        <div className="about-text">
          <div className="profile-picture">
            <img src={TitleFoto} alt="" />
          </div>
          <h1>About Me</h1>
          <div className="desc-wrapper">
            <div className="desc-text">Saya adalah seorang lulusan S1 Teknik Informatika Universitas Sriwijaya yang saat ini mencari pekerjaan di bidang web frontend developer.</div>
            <div className="vertical-line"></div>
            <div className="desc-info">
              <FontAwesomeIcon icon={faLocationDot} /> Palembang, Sumatera Selatan <br />
              <FontAwesomeIcon icon={faCakeCandles} /> 8 April 2000
              <br />
              <FontAwesomeIcon icon={faPhone} /> +62 813 6765 0271
              <br />
              <FontAwesomeIcon icon={faEnvelope} /> rfauzan211@gmail.com
              <br />
            </div>
          </div>
        </div>
        <Skill />

        <div className="sert">
          <h1>Sertifikat</h1>
          <div className="img-sert">
            <img src={sert1} alt="" />
            <img src={sert2} alt="" />
            <img src={sert3} alt="" />
            <img src={sert4} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
