import api from '../../utils/api';
import { MESSAGE_STATES } from '../../utils/constants';
import { setMessage } from '../messages/actions';

export const categoriesActionTypes = {
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  SET_CATEGORIES: 'SET_CATEGORIES',
  DELETE_CATEGORY: 'DELETE_CATEGORY',
  UPDATE_CATEGORY: 'UPPDATE_CATEGORY',
  CREATE_CATEGORY: 'CREATE_CATEGORY',
};

export const setLoading = (isLoading) => ({
  type: categoriesActionTypes.SET_LOADING,
  payload: isLoading,
});

export const setCategories = (categories) => ({
  type: categoriesActionTypes.SET_CATEGORIES,
  payload: categories,
});

export const setError = (error) => ({
  type: categoriesActionTypes.SET_ERROR,
  payload: error,
});

export const fetchCategories = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await api.get('categories');
    dispatch(setCategories(response.data));
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading(false));
  }
};

export const createCategory = (category) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await api.post('categories', category);
    dispatch({
      type: categoriesActionTypes.CREATE_CATEGORY,
      payload: response.data,
    });
    dispatch(setMessage({
      messageState: MESSAGE_STATES.SUCCESS,
      text: `Категория «${response.data.name}» успешно добавлена`,
    }));
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading(false));
  }
};

export const deleteCategory = (category) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    await api.delete(`categories/${category.id}`);
    dispatch({
      type: categoriesActionTypes.DELETE_CATEGORY,
      payload: category.id,
    });
    dispatch(setMessage({
      text: `Категория «${category.name}» удалена`,
    }));
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading(false));
  }
};

export const updateCategory = (updatedCategory) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    await api.put(`categories/${updatedCategory.id}`, updatedCategory);
    dispatch({
      type: categoriesActionTypes.UPDATE_CATEGORY,
      payload: updatedCategory,
    });
    dispatch(setMessage({
      messageState: MESSAGE_STATES.SUCCESS,
      text: `Категория «${updatedCategory.name}» обновлена`,
    }));
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading(false));
  }
};
