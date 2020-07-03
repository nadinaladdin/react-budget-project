import React from 'react'
import AccountWidget from "../../widgets/accountsWidget";

class AccountsPage extends React.Component {
    componentDidMount() {
        const {fetchAccounts} = this.props;
        console.log('fetchAccounts');
        fetchAccounts();
    }

    render() {
        const {accounts, createAccount, error} = this.props;
        return (
            <div>
                <AccountWidget accounts={accounts} createAccount={createAccount} error={error} />
            </div>
        )
    }
}

export default AccountsPage;
