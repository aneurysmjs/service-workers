import React from 'react';

import './Footer.scss';

const Footer = () => (
  <footer className="text-center">
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="footer-col col-md-4">
            <h3>Location</h3>
            <p>
              <i className="fa fa-map-marker" aria-hidden="true" /> Москва, Россия
            </p>
          </div>
          <div className="footer-col col-md-4">
            <h3>Follow me</h3>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a
                  className="btn-social btn-outline"
                  target="_blank"
                  href="https://twitter.com/aneurysmjs"
                  rel="noreferrer"
                >
                  <i className="fa fa-fw fa-twitter" />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="btn-social btn-outline"
                  target="_blank"
                  href="https://www.linkedin.com/in/jeronimo-velasquez-606493bb/"
                  rel="noreferrer"
                >
                  <i className="fa fa-fw fa-linkedin" />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="btn-social btn-outline"
                  target="_blank"
                  href="https://github.com/aneurysmjs"
                  rel="noreferrer"
                >
                  <i className="fa fa-fw fa-github" />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col col-md-4">
            <h3>Made with love</h3>
            <div className="d-flex align-items-center justify-content-around"> 
              <figure className="footer__thumbnails">
                <img className="img-fluid" src="assets/img/react-logo.png" alt="react" />
              </figure>
              <figure className="footer__thumbnails">
                <img className="img-fluid" src="assets/img/bootstrap-logo.png" alt="bootstrap" />
              </figure>
              <figure className="footer__thumbnails">
                <img className="img-fluid" src="assets/img/webpack-logo.png" alt="webpack" />
              </figure>
              <figure className="footer__thumbnails">
                <img className="img-fluid" src="assets/img/firebase-logo.png" alt="firebase" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            Service Workers { new Date().getFullYear() }
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
