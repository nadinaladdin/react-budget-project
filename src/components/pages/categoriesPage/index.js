import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoriesWidget from '../../widgets/categoriesWidget';
import { CategoryType } from '../../propTypes';

class CategoriesPage extends Component {
  componentDidMount() {
    const { fetchCategories } = this.props;
    fetchCategories();
  }

  render() {
    const {
      categories, error, loading, deleteCategory, createCategory, updateCategory, showModal,
    } = this.props;
    return (
      <div className="content__column">
        <CategoriesWidget
          categories={categories}
          error={error}
          loading={loading}
          deleteCategory={deleteCategory}
          createCategory={createCategory}
          updateCategory={updateCategory}
          showModal={showModal}
        />
      </div>
    );
  }
}

CategoriesPage.propTypes = {
  fetchCategories: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(CategoryType),
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  deleteCategory: PropTypes.func.isRequired,
  createCategory: PropTypes.func.isRequired,
  updateCategory: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
};

CategoriesPage.defaultProps = {
  error: null,
  categories: null,
};

export default CategoriesPage;
