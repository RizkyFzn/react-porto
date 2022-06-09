import React, { useEffect } from 'react';
import { Blog, NextBlog, Quiz, ToDo } from '../../img';
import './Portfolio.css';

function Portfolio() {
  const title = 'Portfolio | Ahmad Rizky Fauzan';
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      <div className="porto">
        <div className="image">
          <img src={Blog} alt="" />
          <div className="middle">
            <div className="text">
              <a href="https://rfzn-next.vercel.app/" target="_blank" rel="noreferrer">
                Kunjungi
              </a>
            </div>
          </div>
        </div>
        <div className="image">
          <img src={Quiz} alt="" />
          <div className="middle">
            <div className="text">
              <a href="https://quizkyy.netlify.app/" target="_blank" rel="noreferrer">
                Kunjungi
              </a>
            </div>
          </div>
        </div>
        <div className="image">
          <img src={ToDo} alt="" />
          <div className="middle">
            <div className="text">
              <a href="https://todo-ky.netlify.app/" target="_blank" rel="noreferrer">
                Kunjungi
              </a>
            </div>
          </div>
        </div>
        <div className="image">
          <img src={NextBlog} alt="" />
          <div className="middle">
            <div className="text">
              <a href="https://kikifzn.netlify.app/" target="_blank" rel="noreferrer">
                Kunjungi
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
