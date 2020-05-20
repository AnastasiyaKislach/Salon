import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavItem = ({ url, className, title }) => (
  <Link to={url} className={className}>
    {title}
  </Link>
);

NavItem.propTypes = {
  url: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default NavItem;
