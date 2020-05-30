import React from 'react'
import AccountWidget from "../../widgets/accountsWidget";

const AccountsPage  = ({accounts, createAccount}) => {
    return (
        <div>
            <AccountWidget accounts={accounts} createAccount={createAccount}/>
        </div>
    );
};

export default AccountsPage;