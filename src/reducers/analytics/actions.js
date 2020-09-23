import api from '../../utils/api';

export const analyticsActionTypes = {
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  SET_BALANCE: 'SET_BALANCE',
  SET_ACCOUNTS_DEBITS: 'SET_ACCOUNTS_DEBITS',
  SET_MONTHLY_EXPENSES: 'SET_MONTHLY_EXPENSES',
};

export const setLoading = (isLoading) => ({
  type: analyticsActionTypes.SET_LOADING,
  payload: isLoading,
});

export const setError = (error) => ({
  type: analyticsActionTypes.SET_ERROR,
  payload: error,
});

export const setBalance = (balance) => ({
  type: analyticsActionTypes.SET_BALANCE,
  payload: balance,
});

export const fetchBalance = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await api.get('analytics/balance');
    dispatch(setBalance(response.data));
  } catch (error) {
    dispatch.setError(error);
  } finally {
    dispatch(setLoading(false));
  }
};

export const setMonthlyExpenses = (monthlyExpenses) => ({
  type: analyticsActionTypes.SET_MONTHLY_EXPENSES,
  payload: monthlyExpenses,
});

export const fetchMonthlyExpenses = (year, month) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await api.get(`analytics/month-expenses/${year}/${month}`);
    dispatch(setBalance(response.data));
  } catch (error) {
    dispatch.setError(error);
  } finally {
    dispatch(setLoading(false));
  }
};
