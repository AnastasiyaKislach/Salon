import React from 'react';
import { NavLink } from 'react-router-dom';
import { Routes } from 'root/constants/routeConstants';
import { NavItems } from 'root/constants/navbarData';
import nav from 'root/static/images/nav.png';
import NavItemContainer from '../containers/NavItemContainer';

const Navbar = () => (
  <header className="header">
    <div className="header__body container">
      <div className="header__logo">
        <NavLink exact to={Routes.HOME} className="logo">
          Salon Etc.
        </NavLink>
      </div>
      <nav className="header__navbar">
        {NavItems.map((item, index) => (
          <NavItemContainer key={`nav-${index}`} url={item.url} title={item.title} />
        ))}
      </nav>
      <div className="header__toggle">
        <img src={nav} alt="nav" />
      </div>
    </div>
  </header>
);

export default Navbar;
