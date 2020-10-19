import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navigation from './navigation';
import FloatingButton from '../shared/button/FloatingButton';

export default class Layout extends Component {
  handleModalVisibility = () => {
    const { showModal } = this.props;
    showModal('CREATE_TRANSACTION', { defaultTransaction: {} });
  }

  render() {
    const { children } = this.props;

    return (
      <div className="layout">
        <div className="container">
          <div className="side-menu">
            <Navigation />
          </div>
          <div className="content">
            {children}
          </div>
        </div>
        <div className="button-container">
          <FloatingButton clicked={this.handleModalVisibility} />
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  showModal: PropTypes.func.isRequired,
};
