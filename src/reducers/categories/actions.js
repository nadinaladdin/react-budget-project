import api from '../../utils/api';

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
  payload: { isLoading },
});

export const setCategories = (categories) => ({
  type: categoriesActionTypes.FETCH_CATEGORIES_SUCCESS,
  payload: { categories },
});

export const setError = (error) => ({
  type: categoriesActionTypes.SET_ERROR,
  payload: { error },
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
    dispatch(setLoading());
    await api.post('categories', category);
    dispatch({
      type: categoriesActionTypes.CREATE_CATEGORY,
      payload: { category },
    });
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading(false));
  }
};

export const deleteCategory = (categoryId) => async (dispatch) => {
  try {
    dispatch(setLoading());
    await api.delete(`categories/${categoryId}`);
    dispatch({
      type: categoriesActionTypes.DELETE_CATEGORY,
      payload: { categoryId },
    });
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading(false));
  }
};

export const updateCategory = (updatedCategory) => async (dispatch) => {
  try {
    dispatch(setLoading());
    await api.put(`categories/${updatedCategory.categoryId}`, updatedCategory);
    dispatch({
      type: categoriesActionTypes.UPDATE_CATEGORY,
      payload: { updatedCategory },
    });
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading(false));
  }
};
