import { connect } from 'react-redux';
import Layout from '../components/layout';
import { fetchAccounts } from '../reducers/accounts/actions';
import { fetchCategories } from '../reducers/categories/actions';
import { showModal } from '../reducers/modal/actions';
import { createTransaction } from '../reducers/transactions/actions';

const mapStateToProps = (state) => ({
  accounts: state.accounts.accounts,
  categories: state.categories.categories,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAccounts: () => dispatch(fetchAccounts()),
  fetchCategories: () => dispatch(fetchCategories()),
  createTransaction: (transaction) => dispatch(createTransaction(transaction)),
  showModal: (modalType, modalProps) => dispatch(showModal(modalType, modalProps)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
