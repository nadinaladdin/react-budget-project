import { connect } from 'react-redux';
import CategoriesPage from '../../components/pages/categoriesPage';
import { fetchCategories, deleteCategory } from '../../reducers/categories/actions';

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
  loading: state.categories.loading,
  error: state.categories.errorfF,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () => dispatch(fetchCategories()),
  deleteCategory: (categoryId) => dispatch(deleteCategory(categoryId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesPage);
