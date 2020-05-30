import { connect } from 'react-redux';
import AccountsPage from "../../components/pages/accountsPage";
import {createAccount} from "../../reducers/accounts/actions";

const mapStateToProps = state => ({
    accounts: state.accounts.accounts
});

const mapDispatchToProps = dispatch => ({
    createAccount: accountTitle => dispatch(createAccount(accountTitle))
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountsPage);