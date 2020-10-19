import { connect } from 'react-redux';
import CategoriesPage from '../../components/pages/categoriesPage';
import {
  deleteCategory, createCategory, updateCategory, fetchCategoriesIfNeeded,
} from '../../reducers/categories/actions';
import { showModal } from '../../reducers/modal/actions';

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
  loading: state.categories.loading,
  error: state.categories.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () => dispatch(fetchCategoriesIfNeeded()),
  deleteCategory: (category) => dispatch(deleteCategory(category)),
  createCategory: (category) => dispatch(createCategory(category)),
  updateCategory: (category) => dispatch(updateCategory(category)),
  showModal: (modalType, modalProps) => dispatch(showModal(modalType, modalProps)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesPage);
