import React from 'react';
import AccountsWidget from '../../widgets/accountsWidget';

class AccountsPage extends React.Component {
  componentDidMount() {
    const { fetchAccounts } = this.props;
    fetchAccounts();
  }

  render() {
    const { accounts, createAccount, error } = this.props;
    return (
      <div>
        <AccountsWidget accounts={accounts} createAccount={createAccount} error={error} />
      </div>
    );
  }
}

export default AccountsPage;
