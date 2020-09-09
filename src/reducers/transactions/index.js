import { transactionsActionTypes } from './actions';

const DEFAULT_STATE = {
  transactions: [],
  loading: false,
  error: null,
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case transactionsActionTypes.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case transactionsActionTypes.SET_TRANSACTIONS:
      return {
        ...state,
        loading: false,
        transactions: action.payload,
      };
    case transactionsActionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case transactionsActionTypes.CREATE_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case transactionsActionTypes.DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter((transaction) => transaction._id !== action.payload),
      };
    case transactionsActionTypes.UPDATE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.map((transaction) => (transaction._id === action.payload._id ? { ...transaction, ...action.payload } : transaction)),
      };
    default:
      return state;
  }
};
