import React, { Component } from 'react';
import _ from 'lodash';
import { NavItems } from 'root/constants/navbarData';
import Navbar from '../components/Navbar';

class NavbarContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSideDrawerOpen: false
    };

    this.drawerToggleClickHandler = this.drawerToggleClickHandler.bind(this);
    this.backdropClickHandler = this.backdropClickHandler.bind(this);
    this.getNavItems = this.getNavItems.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    let isEqualProps = !_.isEqual(this.props, nextProps);
    let isEqualStates = !_.isEqual(this.state, nextState);
    return isEqualProps || isEqualStates;
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { isSideDrawerOpen: !prevState.isSideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ isSideDrawerOpen: false });
  };

  getNavItems = () => {
    return NavItems;
  };

  render() {
    let props = {
      isSideDrawerOpen: this.state.isSideDrawerOpen,
      drawerToggleClickHandler: this.drawerToggleClickHandler,
      backdropClickHandler: this.backdropClickHandler,
      navItems: this.getNavItems()
    };
    return <Navbar {...props} />;
  }
}

NavbarContainer.propTypes = {};

export default NavbarContainer;
