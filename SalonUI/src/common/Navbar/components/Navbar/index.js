import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '../Toolbar';
import SideDrawer from '../SideDrawer';
import Backdrop from '../Backdrop';

const Navbar = ({ isSideDrawerOpen, drawerToggleClickHandler, backdropClickHandler, navItems }) => (
  <>
    <Toolbar clickHandler={drawerToggleClickHandler} navItems={navItems} />
    <SideDrawer isVisible={isSideDrawerOpen} navItems={navItems} />
    <Backdrop isVisible={isSideDrawerOpen} clickHandler={backdropClickHandler} />
  </>
);

Navbar.propTypes = {
  drawerToggleClickHandler: PropTypes.func,
  isSideDrawerOpen: PropTypes.bool,
  backdropClickHandler: PropTypes.func,
  navItems: PropTypes.arrayOf(PropTypes.object)
};

export default Navbar;
