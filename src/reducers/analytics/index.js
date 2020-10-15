import { analyticsActionTypes } from './actions';

const DEFAULT_STATE = {
  balance: 0,
  monthlyExpenses: {},
  loading: false,
  error: null,
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case analyticsActionTypes.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case analyticsActionTypes.SET_BALANCE:
      return {
        ...state,
        loading: false,
        balance: action.payload,
      };
    case analyticsActionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case analyticsActionTypes.SET_MONTHLY_EXPENSES:
      return {
        ...state,
        monthlyExpenses: action.payload,
      };
    default:
      return state;
  }
};
