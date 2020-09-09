import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navigation from './navigation';
import TransactionModal from '../modals/transactionModal';
import FloatingButton from '../shared/button/FloatingButton';

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenModal: false,
    };
  }

  componentDidMount() {
    const { fetchTransactions, fetchCategories, fetchAccounts } = this.props;
    fetchAccounts();
    fetchCategories();
    fetchTransactions();
  }

  handleModalVisibility = () => {
    this.setState((prevState) => ({ isOpenModal: !prevState.isOpenModal }));
  }

  render() {
    const {
      children, loadingAccounts, loadingCategories, categories, accounts,
    } = this.props;
    const { isOpenModal } = this.state;

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
        {categories && categories.length > 0 && accounts && accounts.length > 0 && (
        <TransactionModal
          isOpen={isOpenModal}
          close={this.handleModalVisibility}
          categories={categories}
          accounts={accounts}
        />
        )}
        <div className="button-container">
          <FloatingButton clicked={this.handleModalVisibility}/>
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
