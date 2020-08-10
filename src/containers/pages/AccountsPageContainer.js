import { connect } from 'react-redux';
import AccountsPage from '../../components/pages/accountsPage';
import { createAccount, fetchAccounts } from '../../reducers/accounts/actions';

const mapStateToProps = (state) => ({
  accounts: state.accounts.accounts,
  loading: state.accounts.loading,
  error: state.accounts.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAccounts: () => dispatch(fetchAccounts()),
  createAccount: (accountTitle) => dispatch(createAccount(accountTitle)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountsPage);
