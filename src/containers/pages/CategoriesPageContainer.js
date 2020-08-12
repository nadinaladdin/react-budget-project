import { connect } from 'react-redux';
import CategoriesPage from '../../components/pages/categoriesPage';
import {
  fetchCategories, deleteCategory, createCategory, updateCategory,
} from '../../reducers/categories/actions';

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
  loading: state.categories.loading,
  error: state.categories.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () => dispatch(fetchCategories()),
  deleteCategory: (categoryId) => dispatch(deleteCategory(categoryId)),
  createCategory: (category) => dispatch(createCategory(category)),
  updateCategory: (category) => dispatch(updateCategory(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesPage);
