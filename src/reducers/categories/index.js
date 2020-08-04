import { categoriesActionTypes } from './actions';

const DEFAULT_STATE = {
    categories: [],
    loading: false,
    error: null
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type) {
        case categoriesActionTypes.FETCH_CATEGORIES_BEGIN: 
            return {
                ...state,
                loading: true,
                error: null
            };
        case categoriesActionTypes.FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                loading: false,
                categories: action.payload.categories
            };
        case categoriesActionTypes.FETCH_CATEGORIES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                categories: []
            };
        default:
            return state;
    };
}