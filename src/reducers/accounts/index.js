import {accountsActionTypes} from "./actions";

const DEFAULT_STATE = {
    accounts: [],
    loading: false,
    error: null
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case accountsActionTypes.FETCH_ACCOUNTS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case accountsActionTypes.FETCH_ACCOUNTS_SUCCESS:
            return {
                ...state,
                loading: false,
                accounts: action.payload.accounts
            };
        case accountsActionTypes.FETCH_ACCOUNTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                accounts: []
            };
        case accountsActionTypes.CREATE_ACCOUNT_SUCCESS:
            return {
                ...state,
                accounts: [action.payload.account, ...state.accounts]
            };
        case accountsActionTypes.CREATE_ACCOUNT_FAILURE:
            return {
                ...state,
                error: action.payload.error
            };
        default:
            return state
    }
}
