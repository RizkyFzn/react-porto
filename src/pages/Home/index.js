import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import Download from '../../components/cv';
import { Foto, Shape, TitleFoto } from '../../img';
import './Home.css';

function Home() {
  const title = 'Ahmad Rizky Fauzan';
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      <div className="foto">
        <img src={TitleFoto} alt=""></img>
      </div>
      <div className="detail">
        <h1>
          Hai, Saya <span>Ahmad Rizky Fauzan</span>
        </h1>
        <p>Ini adalah Portfolio saya terkait web development. </p>
        <div className="cv">
          <Download />
        </div>
      </div>

      <div className="images">
        <img src={Shape} className="shape" alt="" />
        <img src={Foto} className="foto" alt="" />
      </div>

      <div className="social">
        <a href="https://mail.google.com/mail/u/0/?fs=1&to=rfauzan211@gmail.com&tf=cm" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href="https://www.linkedin.com/in/rizky-fauzan" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com//RizkyFzn" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.instagram.com/rizky_fzn/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </>
  );
}

export default Home;
