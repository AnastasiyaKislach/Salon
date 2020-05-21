import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Backdrop = (props) => {
  let { isVisible, clickHandler } = props;
  return isVisible ? <div className="backdrop" onClick={clickHandler} role="presentation" /> : null;
};

Backdrop.propTypes = {
  isVisible: PropTypes.bool,
  clickHandler: PropTypes.func
};

export default Backdrop;
