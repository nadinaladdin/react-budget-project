import api from '../../utils/api';
import { setMessage } from '../messages/actions';

export const accountsActionTypes = {
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  SET_ACCOUNTS: 'SET_ACCOUNTS',
  DELETE_ACCOUNT: 'DELETE_ACCOUNT',
  UPDATE_ACCOUNT: 'UPPDATE_ACCOUNT',
  CREATE_ACCOUNT: 'CREATE_ACCOUNT',
};

export const setLoading = (isLoading) => ({
  type: accountsActionTypes.SET_LOADING,
  payload: isLoading,
});

export const setAccounts = (accounts) => ({
  type: accountsActionTypes.SET_ACCOUNTS,
  payload: accounts,
});

export const setError = (error) => ({
  type: accountsActionTypes.SET_ERROR,
  payload: error,
});

export const fetchAccounts = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await api.get('accounts');
    dispatch(setAccounts(response.data));
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading(false));
  }
};

export const getAccounts = () => async (dispatch, getState) => {
  let state = getState();
  if (state.accounts.accounts) {
    return state.accounts.accounts;
  }
  dispatch(fetchAccounts());
  state = getState();
  return state.accounts.accounts;
};

export const createAccount = (account) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    await api.post('accounts', account);
    dispatch({
      type: accountsActionTypes.CREATE_ACCOUNT,
      payload: account,
    });
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading(false));
  }
};

export const deleteAccount = (account) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    await api.delete(`accounts/${account.id}`);
    dispatch({
      type: accountsActionTypes.DELETE_ACCOUNT,
      payload: account.id,
    });
    dispatch(setMessage({
      text: `Счет «${account.name}» удален`,
    }));
    console.log('Message setting');
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading(false));
  }
};

export const updateAccount = (updatedAccount) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    await api.put(`accounts/${updatedAccount.id}`, updatedAccount);
    dispatch({
      type: accountsActionTypes.UPDATE_ACCOUNT,
      payload: updatedAccount,
    });
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading(false));
  }
};
