import React from 'react';
import PropTypes from 'prop-types';
import Navigation from './navigation';

const Layout = ({ children }) => (
  <div className="layout">
    <div className="container">
      <div className="side-menu">
        <Navigation />
      </div>
      <div className="content">
        {children}
      </div>
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
