import api from '../../utils/api';

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

export const fetchTransactions = () => async (dispatch) => {
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

export const createTransaction = (transaction) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    await api.post('transactions', transaction);
    dispatch({
      type: transactionsActionTypes.CREATE_TRANSACTION,
      payload: transaction,
    });
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading(false));
  }
};

export const deleteTransaction = (transactionId) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    await api.delete(`transactions/${transactionId}`);
    dispatch({
      type: transactionsActionTypes.DELETE_TRANSACTION,
      payload: transactionId,
    });
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading(false));
  }
};

export const updateTransaction = (updatedTransaction) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    await api.put(`transactions/${updatedTransaction._id}`, updatedTransaction);
    dispatch({
      type: transactionsActionTypes.UPDATE_TRANSACTION,
      payload: updatedTransaction,
    });
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading(false));
  }
};
