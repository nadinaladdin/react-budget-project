import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TransactionsWidget from '../../widgets/transactionsWidget';
import { TransactionType, CategoryType, AccountType } from '../../propTypes';

class TransactionsPage extends Component {
  render() {
    const {
      transactions, error, loadingTransactions, loadingAccounts, loadingCategories, deleteTransaction, createTransaction, updateTransaction, categories, accounts,
    } = this.props;
    console.log(loadingAccounts);
    console.log(loadingCategories);
    return (
      <div className="spreaded-content">
        <TransactionsWidget
          transactions={transactions}
          error={error}
          loadingTransactions={loadingTransactions}
          loadingAccounts={loadingAccounts}
          loadingCategories={loadingCategories}
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
  loadingCategories: PropTypes.bool.isRequired,
  deleteTransaction: PropTypes.func.isRequired,
  createTransaction: PropTypes.func.isRequired,
  updateTransaction: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(CategoryType).isRequired,
  accounts: PropTypes.arrayOf(AccountType).isRequired,
};

export default TransactionsPage;
