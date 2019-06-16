import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import classNames from 'classnames';

import './Navbar.scss';

interface PropsType {
  history: {
    push(s: string): void
  }
}

const Navbar = ({ history }: PropsType) => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = (endpoint: string): void => {
    setOpen(false);
    history.push(endpoint);
  };

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light" id="mainNav">
      <div className="container">
        <Link className="navbar-brand" to="/">Jero.io</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => {
            setOpen(!isOpen);
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={classNames(
            'collapse navbar-collapse justify-content-end', 
            {
              show: isOpen
            })}
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a
                className="nav-link"
                onClick={() => {
                  handleClick('/');
                }}
              >
                  Home
                {/* <span className="sr-only">(current)</span> */}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => {
                  handleClick('/playground');
                }} 
              >
                Playground
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
