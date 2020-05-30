export const accountsActionTypes = {
    FETCH_ACCOUNTS: 'FETCH_ACCOUNTS',
    CREATE_ACCOUNT: 'CREATE_ACCOUNT'
};

export const fetchAccounts = () => {
    return dispatch ({
       type: accountsActionTypes.FETCH_ACCOUNTS
    });
};

export const createAccount = (accountTitle) => {
    const account = {
        title: accountTitle,
        total: 0
    };
    return ({
        type: accountsActionTypes.CREATE_ACCOUNT,
        payload: account
    })
};