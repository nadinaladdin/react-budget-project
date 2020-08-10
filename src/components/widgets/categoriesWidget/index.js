import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../../shared/input';
import Dropdown from '../../shared/dropdown';
import Button from '../../shared/button';
import CategoriesList from './categoriesList';
import ShoppingBag from '../../../assets/ShoppingBag.svg';
import { COLOURS } from '../../../utils/constants';
import { CategoryType } from '../../propTypes';

export default class CategoriesWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { categories, deleteCategory } = this.props;

    const dropdownItems = COLOURS.map((colour) => ({
      title: '',
      colour,
    }));
    const categoryBody = categories && categories.length > 0
      ? <CategoriesList categories={categories} handleDeleteButton={deleteCategory} />
      : (
        <div className="empty-alert">
          <img src={ShoppingBag} alt="credit-card-icon" className="empty-alert__icon" />
          <h3 className="tertiary-header empty-alert__header">Добавьте свою первую категорию</h3>
          <p className="footnote empty-alert__text">Чтобы понять, на что вам больше всего нравится тратить деньги, нужно создать категорию</p>
        </div>
      );

    return (
      <div className="card">
        <div className="card__header">
          Категории
        </div>
        <div className="card__form">
          <Input placeholder="Новая категория" />
          <Dropdown items={dropdownItems} />
          <Button type="primary" size="medium">Добавить</Button>
        </div>
        <div className="card__body">
          {categoryBody}
        </div>
      </div>
    );
  }
}

CategoriesWidget.propTypes = {
  categories: PropTypes.arrayOf(CategoryType).isRequired,
  deleteCategory: PropTypes.func.isRequired,
};
