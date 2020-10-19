import { connect } from 'react-redux';
import TransactionModal from '../../components/modals/transactionModal';
import { fetchAccountsIfNeeded } from '../../reducers/accounts/actions';
import { fetchCategoriesIfNeeded } from '../../reducers/categories/actions';
import { hideModal } from '../../reducers/modal/actions';
import { createTransaction } from '../../reducers/transactions/actions';

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
  accounts: state.accounts.accounts,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () => dispatch(fetchCategoriesIfNeeded()),
  fetchAccounts: () => dispatch(fetchAccountsIfNeeded()),
  saveTransaction: (transaction) => dispatch(createTransaction(transaction)),
  hideModal: () => dispatch(hideModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionModal);
