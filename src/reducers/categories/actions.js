import api from '../../utils/api';

export const categoriesActionTypes = {
    FETCH_CATEGORIES_BEGIN: 'FETCH_CATEGORIES_BEGIN',
    FETCH_CATEGORIES_SUCCESS: 'FETCH_CATEGORIES_SUCCESS',
    FETCH_CATEGORIES_FAILURE: 'FETCH_CATEGORIES_FAILURE',
    CREATE_CATEGORY_SUCCESS: 'CREATE_CATEGORY_SUCCESS',
    CREATE_CATEGORY_FAILURE: 'CREATE_CATEGORY_FAILURE',
};

export const fetchCategoriesBegin = () => {
    return ({
        type: categoriesActionTypes.FETCH_CATEGORIES_BEGIN
    });
};

export const fetchCategoriesSuccess = (categories) => {
    return ({
        type: categoriesActionTypes.FETCH_CATEGORIES_SUCCESS,
        payload: { categories }
    });
};

export const fetchCategoriesFailure = (error) => {
    return ({
        type: categoriesActionTypes.FETCH_CATEGORIES_FAILURE,
        payload: { error }
    });
};

export const fetchCategories = () => {
    return async (dispatch) => {
        try {
            dispatch(fetchCategoriesBegin());
            const response = await api.get('categories');
            dispatch(fetchCategoriesSuccess(response.data));
        } catch (error) {
            dispatch(fetchCategoriesFailure(error));
        }
    }
};