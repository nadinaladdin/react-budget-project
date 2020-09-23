import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TransactionsWidget from '../../widgets/transactionsWidget';
import { TransactionType, CategoryType, AccountType } from '../../propTypes';

class TransactionsPage extends Component {
  componentDidMount() {
    const { fetchTransactions } = this.props;
    fetchTransactions();
  }

  render() {
    const {
      transactions, error, loading, deleteTransaction, createTransaction, updateTransaction, categories, accounts,
    } = this.props;
    return (
      <div className="spreaded-content">
        <TransactionsWidget
          transactions={transactions}
          error={error}
          loadingTransactions={loading}
          categories={categories}
          accounts={accounts}
          deleteTransaction={deleteTransaction}
          createTransaction={createTransaction}
          updateTransaction={updateTransaction}
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
  createTransaction: PropTypes.func.isRequired,
  updateTransaction: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(CategoryType).isRequired,
  accounts: PropTypes.arrayOf(AccountType).isRequired,
};

export default TransactionsPage;
