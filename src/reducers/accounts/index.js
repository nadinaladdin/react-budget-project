import { accountsActionTypes } from './actions';

const DEFAULT_STATE = {
  accounts: [],
  loading: false,
  error: null,
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case accountsActionTypes.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case accountsActionTypes.SET_ACCOUNTS:
      return {
        ...state,
        loading: false,
        accounts: action.payload,
      };
    case accountsActionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case accountsActionTypes.CREATE_ACCOUNT:
      return {
        ...state,
        accounts: [...state.accounts, action.payload],
      };
    case accountsActionTypes.DELETE_ACCOUNT:
      return {
        ...state,
        accounts: state.accounts.filter((account) => account._id !== action.payload),
      };
    case accountsActionTypes.UPDATE_ACCOUNT:
      return {
        ...state,
        accounts: state.accounts.map((account) => (account._id === action.payload._id ? { ...account, ...action.payload } : account)),
      };
    default:
      return state;
  }
};
