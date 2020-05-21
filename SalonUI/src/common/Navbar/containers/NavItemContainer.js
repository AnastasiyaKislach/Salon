import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import NavItem from '../components/NavItem';

class NavItemContainer extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    let isEqualProps = !_.isEqual(this.props, nextProps);
    let isEqualStates = !_.isEqual(this.state, nextState);
    return isEqualProps || isEqualStates;
  }

  render() {
    let {
      location: { pathname },
      url
    } = this.props;
    let isActive = pathname === url;
    let propsObj = {
      ...this.props,
      className: `toolbar__link ${isActive ? 'toolbar__link--active' : ''}`
    };
    return <NavItem {...propsObj} />;
  }
}

NavItemContainer.propTypes = {
  location: PropTypes.object,
  url: PropTypes.string
};

export default withRouter(NavItemContainer);
