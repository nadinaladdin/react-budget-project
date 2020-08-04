import { connect } from 'react-redux';
import CategoriesPage from "../../components/pages/categoriesPage";
import { fetchCategories } from '../../reducers/categories/actions'

const mapStateToProps = state => ({
    categories: state.categories.categories,
    loading: state.categories.loading,
    error: state.categories.errorfF
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCategories: () => dispatch(fetchCategories())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesPage);