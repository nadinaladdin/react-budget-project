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
      categories, error, loading, deleteCategory,
    } = this.props;
    return (
      <div>
        <CategoriesWidget categories={categories} error={error} loading={loading} deleteCategory={deleteCategory} />
      </div>
    );
  }
}

CategoriesPage.propTypes = {
  fetchCategories: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(CategoryType).isRequired,
  error: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  deleteCategory: PropTypes.func.isRequired,
};

export default CategoriesPage;
