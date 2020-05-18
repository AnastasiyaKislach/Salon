import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { clickCounter } from 'root/selectors/clickSelector';
import { setCounter } from 'root/actions/clickActions';
import 'root/styles/mainLayout.scss';

const MainLayout = ({ clickCounter, setCounter, children }) => {
  return <div className="mainContainer">{children}</div>;
};

MainLayout.propTypes = {
  setCounter: PropTypes.func,
  clickCounter: PropTypes.number
};

const mapStateToProps = (state) => {
  return {
    clickCounter: clickCounter(state)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setCounter: () => {
      dispatch(setCounter());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
