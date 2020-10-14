import api from '../../utils/api';
import { MESSAGE_STATES, TRANSACTION_TYPES } from '../../utils/constants';
import { moneyStringFormatter } from '../../utils/stringUtils';
import { setMessage } from '../messages/actions';

export const transactionsActionTypes = {
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  SET_TRANSACTIONS: 'SET_TRANSACTIONS',
  DELETE_TRANSACTION: 'DELETE_TRANSACTION',
  UPDATE_TRANSACTION: 'UPDATE_TRANSACTION',
  CREATE_TRANSACTION: 'CREATE_TRANSACTION',
};

export const setLoading = (isLoading) => ({
  type: transactionsActionTypes.SET_LOADING,
  payload: isLoading,
});

export const setError = (error) => ({
  type: transactionsActionTypes.SET_ERROR,
  payload: error,
});

export const setTransactions = (transactions) => ({
  type: transactionsActionTypes.SET_TRANSACTIONS,
  payload: transactions,
});

const fetchTransactions = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await api.get('transactions');
    dispatch(setTransactions(response.data));
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading(false));
  }
};

export const fetchTransactionsIfNeeded = () => async (dispatch, getState) => {
  const state = getState();
  if (state.transactions.transactions) {
    return Promise.resolve();
  }
  return dispatch(fetchTransactions());
};

export const createTransaction = (transaction) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await api.post('transactions', transaction);
    dispatch({
      type: transactionsActionTypes.CREATE_TRANSACTION,
      payload: response.data,
    });
    dispatch(setMessage({
      messageState: MESSAGE_STATES.SUCCESS,
      text: response.data.type === TRANSACTION_TYPES.DEBIT
        ? `Пополнение на +${moneyStringFormatter(response.data.sum)} успешно записано`
        : `Трата на -${moneyStringFormatter(response.data.sum)} успешно записана`,
    }));
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading(false));
  }
};

export const deleteTransaction = (transaction) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    await api.delete(`transactions/${transaction.id}`);
    dispatch({
      type: transactionsActionTypes.DELETE_TRANSACTION,
      payload: transaction.id,
    });
    dispatch(setMessage({
      text: transaction.type === TRANSACTION_TYPES.DEBIT
        ? `Пополнение на +${moneyStringFormatter(transaction.sum)} удалено`
        : `Трата на -${moneyStringFormatter(transaction.sum)} удалена`,
    }));
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading(false));
  }
};

export const updateTransaction = (updatedTransaction) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    console.log(updatedTransaction);
    await api.put(`transactions/${updatedTransaction.id}`, updatedTransaction);
    dispatch({
      type: transactionsActionTypes.UPDATE_TRANSACTION,
      payload: updatedTransaction,
    });
    dispatch(setMessage({
      messageState: MESSAGE_STATES.SUCCESS,
      text: updatedTransaction.type === TRANSACTION_TYPES.DEBIT
        ? `Пополнение на +${moneyStringFormatter(updatedTransaction.sum)} отредактировано`
        : `Трата на -${moneyStringFormatter(updatedTransaction.sum)} отредактирована`,
    }));
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading(false));
  }
};
