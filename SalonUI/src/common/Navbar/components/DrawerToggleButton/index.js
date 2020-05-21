import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const DrawerToggleButton = (props) => (
  <button className="toggle-button" onClick={props.clickHandler}>
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
  </button>
);

DrawerToggleButton.propTypes = {
  clickHandler: PropTypes.func
};

export default DrawerToggleButton;
