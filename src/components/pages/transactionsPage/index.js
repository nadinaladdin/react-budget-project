import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TransactionsWidget from '../../widgets/transactionsWidget';
import { TransactionType } from '../../propTypes';

class TransactionsPage extends Component {
  componentDidMount() {
    const { fetchTransactions } = this.props;
    fetchTransactions();
  }

  render() {
    const {
      transactions, error, loading, deleteTransaction, showModal,
    } = this.props;
    return (
      <div className="content__column content__column_spreaded">
        <TransactionsWidget
          transactions={transactions}
          error={error}
          loadingTransactions={loading}
          showModal={showModal}
          deleteTransaction={deleteTransaction}
        />
      </div>
    );
  }
}

TransactionsPage.propTypes = {
  fetchTransactions: PropTypes.func.isRequired,
  transactions: PropTypes.arrayOf(TransactionType).isRequired,
  error: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  deleteTransaction: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
};

export default TransactionsPage;
