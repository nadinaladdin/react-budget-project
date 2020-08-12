import { categoriesActionTypes } from './actions';

const DEFAULT_STATE = {
  categories: [],
  loading: false,
  error: null,
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case categoriesActionTypes.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case categoriesActionTypes.SET_CATEGORIES:
      return {
        ...state,
        loading: false,
        categories: action.payload,
      };
    case categoriesActionTypes.CREATE_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };
    case categoriesActionTypes.DELETE_CATEGORY:
      return {
        ...state,
        categories: state.categories.filter((category) => category._id !== action.payload),
      };
    case categoriesActionTypes.UPDATE_CATEGORY:
      return {
        ...state,
        categories: state.categories.map(category => category._id === action.payload._id ? { ...category, ...action.payload } : category),
      };
    case categoriesActionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
