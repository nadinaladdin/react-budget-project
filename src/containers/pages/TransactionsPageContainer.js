import { connect } from 'react-redux';
import TransactionsPage from '../../components/pages/transactionsPage';
import { showModal } from '../../reducers/modal/actions';
import {
  deleteTransaction, createTransaction, updateTransaction, fetchTransactionsIfNeeded,
} from '../../reducers/transactions/actions';

const mapStateToProps = (state) => ({
  transactions: state.transactions.transactions,
  loading: state.transactions.loading,
  error: state.transactions.error,
  categories: state.categories.categories,
  accounts: state.accounts.accounts,
});

const mapDispatchToProps = (dispatch) => ({
  fetchTransactions: () => dispatch(fetchTransactionsIfNeeded()),
  deleteTransaction: (transaction) => dispatch(deleteTransaction(transaction)),
  createTransaction: (transaction) => dispatch(createTransaction(transaction)),
  updateTransaction: (transaction) => dispatch(updateTransaction(transaction)),
  showModal: (modalType, modalProps) => dispatch(showModal(modalType, modalProps)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsPage);
