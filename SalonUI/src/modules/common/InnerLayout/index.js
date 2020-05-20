import React from 'react';

import Navbar from 'root/modules/common/Navbar';

const InnerLayout = ({ children }) => (
  <div className={'innerContainer'}>
    <Navbar />
    <div className="innerContent">{children}</div>
  </div>
);

InnerLayout.propTypes = {};

export default InnerLayout;
