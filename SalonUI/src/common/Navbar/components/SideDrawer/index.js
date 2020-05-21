import React from 'react';
import PropTypes from 'prop-types';
import NavItemContainer from '../../containers/NavItemContainer';
import './styles.scss';

const SideDrawer = ({ isVisible, navItems }) => {
  let drawerClasses = `side-drawer ${isVisible ? 'open' : ''} `;
  return isVisible ? (
    <nav className={drawerClasses}>
      <ul>
        {navItems.map((item, index) => (
          <li key={`nav-${index}`}>
            <NavItemContainer url={item.url} title={item.title} />
          </li>
        ))}
      </ul>
    </nav>
  ) : null;
};

SideDrawer.propTypes = {
  isVisible: PropTypes.bool,
  navItems: PropTypes.arrayOf(PropTypes.object)
};

export default SideDrawer;
