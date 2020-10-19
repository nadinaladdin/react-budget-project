import React from 'react';
import PropTypes from 'prop-types';
import AccountsWidget from '../../widgets/accountsWidget';
import { AccountType } from '../../propTypes';

class AccountsPage extends React.Component {
  componentDidMount() {
    const { fetchAccounts } = this.props;
    fetchAccounts();
  }

  render() {
    const {
      accounts, createAccount, error, deleteAccount, updateAccount, loading, showModal,
    } = this.props;
    return (
      <div className="content__column">
        <AccountsWidget
          accounts={accounts}
          createAccount={createAccount}
          error={error}
          loading={loading}
          updateAccount={updateAccount}
          deleteAccount={deleteAccount}
          showModal={showModal}
        />
      </div>
    );
  }
}

AccountsPage.propTypes = {
  fetchAccounts: PropTypes.func.isRequired,
  accounts: PropTypes.arrayOf(AccountType),
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  createAccount: PropTypes.func.isRequired,
  updateAccount: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
};

AccountsPage.defaultProps = {
  accounts: null,
  error: null,
};

export default AccountsPage;
