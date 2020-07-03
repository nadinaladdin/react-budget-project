import api from '../../utils/api';

export const accountsActionTypes = {
    FETCH_ACCOUNTS_BEGIN: 'FETCH_ACCOUNTS_BEGIN',
    FETCH_ACCOUNTS_SUCCESS: 'FETCH_ACCOUNTS_SUCCESS',
    FETCH_ACCOUNTS_FAILURE: 'FETCH_ACCOUNTS_FAILURE',
    CREATE_ACCOUNT_SUCCESS: 'CREATE_ACCOUNT_SUCCESS',
    CREATE_ACCOUNT_FAILURE: 'CREATE_ACCOUNT_FAILURE',
};

export const fetchAccountsBegin = () => {
    console.log('HERE BEGIN');
    return  ({
        type: accountsActionTypes.FETCH_ACCOUNTS_BEGIN
    });
};

export const fetchAccountsSuccess = (accounts) => {
    return ({
        type: accountsActionTypes.FETCH_ACCOUNTS_SUCCESS,
        payload: { accounts }
    });
};

export const fetchAccountsFailure = (error) => {
    return ({
        type: accountsActionTypes.FETCH_ACCOUNTS_FAILURE,
        payload: { error }
    });
};

export const createAccountSuccess = (account) => {
    console.log(account);
    return({
        type: accountsActionTypes.CREATE_ACCOUNT_SUCCESS,
        payload: { account }
    });
};

export const createAccountFailure = (error) => {
    return({
        type: accountsActionTypes.CREATE_ACCOUNT_FAILURE,
        payload: { error }
    });
};

export const createAccount = (accountTitle) => {
    const account = {
        name: accountTitle,
        sum: 0
    };
    return async dispatch => {
        try {
            const response = await api.post('accounts', account);
            dispatch(createAccountSuccess(response.data));
        } catch (error) {
            dispatch(createAccountFailure(error));
        }
    }
};

export const fetchAccounts = () => {
    return async (dispatch) => {
        try {
            dispatch(fetchAccountsBegin());
            const response = await api.get('accounts');
            dispatch(fetchAccountsSuccess(response.data));
        } catch (error) {
           dispatch(fetchAccountsFailure(error));
        }
    }
};
