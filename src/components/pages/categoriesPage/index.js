import React, { Component } from 'react';
import CategoriesWidget from '../../widgets/categoriesWidget';

class CategoriesPage extends Component {
    componentDidMount() {
        const { fetchCategories } = this.props;
        fetchCategories();
    }

    render() {
        const { categories, error, loading } = this.props;
        return (
            <div>
                <CategoriesWidget categories={categories}  error={error}/>
            </div>
        )
    }
}

export default CategoriesPage;