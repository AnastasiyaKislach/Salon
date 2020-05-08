import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { clickCounter} from 'root/selectors/clickSelector';
import { setCounter } from 'root/actions/clickActions';
import logo from 'root/static/images/logo.svg';
import 'root/styles/mainLayout.scss';

const MainLayout = ({clickCounter, setCounter}) => {
  return (
    <div className="mainContainer">
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button className="App-link" onClick={setCounter}>
          {clickCounter}
        </button>
      </header>
    </div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.object,
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainLayout);
