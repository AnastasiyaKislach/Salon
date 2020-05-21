import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Routes } from 'root/constants/routeConstants';
import NavItemContainer from '../../containers/NavItemContainer';
import DrawerToggleButton from '../DrawerToggleButton';
import './styles.scss';

const Toolbar = (props) => (
  <header className="toolbar">
    <div className="toolbar__navigation">
      <div className="toolbar__logo">
        <NavLink exact to={Routes.HOME}>
          Salon Etc.
        </NavLink>
      </div>
      <nav className="toolbar__navbar">
        {props.navItems.map((item, index) => (
          <NavItemContainer key={`nav-${index}`} url={item.url} title={item.title} />
        ))}
      </nav>
      <div className="toolbar__toggle">
        <DrawerToggleButton clickHandler={props.clickHandler} />
      </div>
    </div>
  </header>
);

Toolbar.propTypes = {
  clickHandler: PropTypes.func,
  navItems: PropTypes.arrayOf(PropTypes.object)
};

export default Toolbar;
