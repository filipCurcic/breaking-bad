import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../img/logo.png';
import '../../styles/Header/Header.css';

const Header = () => {
  return (
    <>
      <header className="center">
        <Link to="/characters">
          <img src={logo} alt="" />
        </Link>
      </header>
      <div className="header__menu flex__row center">
        <div className="flex__row center header__buttonContainer">
          <span>
            {' '}
            <NavLink
              className="header__navLink"
              activeStyle={{ textDecoration: 'underline' }}
              to="/characters"
            >
              Characters{' '}
            </NavLink>{' '}
          </span>
          <span>
            <NavLink
              className="header__navLink"
              activeStyle={{ textDecoration: 'underline' }}
              to="/episodes"
            >
              Episodes{' '}
            </NavLink>
          </span>
        </div>
      </div>
    </>
  );
};

export default Header;
