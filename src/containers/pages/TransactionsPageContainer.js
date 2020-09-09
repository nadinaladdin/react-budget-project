import { connect } from 'react-redux';
import TransactionsPage from '../../components/pages/transactionsPage';
import {
  fetchTransactions, deleteTransaction, createTransaction, updateTransaction,
} from '../../reducers/transactions/actions';

const mapStateToProps = (state) => ({
  transactions: state.transactions.transactions,
  loadingTransactions: state.transactions.loading,
  loadingAccounts: state.accounts.loading,
  loadingCategories: state.categories.loading,
  error: state.transactions.error,
  categories: state.categories.categories,
  accounts: state.accounts.accounts,
});

const mapDispatchToProps = (dispatch) => ({
  fetchTransactions: () => dispatch(fetchTransactions()),
  deleteTransaction: (transactionId) => dispatch(deleteTransaction(transactionId)),
  createTransaction: (transaction) => dispatch(createTransaction(transaction)),
  updateTransaction: (transaction) => dispatch(updateTransaction(transaction)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsPage);
