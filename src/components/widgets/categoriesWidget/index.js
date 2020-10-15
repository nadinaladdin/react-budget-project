import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../../shared/input';
import Dropdown from '../../shared/dropdown';
import Button from '../../shared/button';
import CategoriesList from './categoriesList';
import ShoppingBag from '../../../assets/ShoppingBag.svg';
import { COLOURS } from '../../../utils/constants';
import { CategoryType } from '../../propTypes';
import Loader from '../../shared/loader';

const dropdownItems = COLOURS.map((colour) => ({
  title: '',
  colour,
}));

export default class CategoriesWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isButtonDisabled: true,
      inputValue: null,
      selectedColourItem: dropdownItems ? dropdownItems[0] : null,
    };
  }

  handleChangeValue = (value) => {
    const { isButtonDisabled } = this.state;
    this.setState({ inputValue: value });
    if (!value !== isButtonDisabled) {
      this.setState({ isButtonDisabled: !value });
    }
  };

  handleButtonClicked = () => {
    const { createCategory } = this.props;
    const { inputValue, selectedColourItem } = this.state;
    const category = {
      name: inputValue,
      colour: selectedColourItem.colour,
    };
    createCategory(category);
    this.setState({
      inputValue: null,
      isButtonDisabled: true,
      selectedColourItem: null,
    });
  };

  handleDropdownClicked = (value) => {
    this.setState({ selectedColourItem: value });
  }

  render() {
    const {
      categories, deleteCategory, updateCategory, loading, error, showModal,
    } = this.props;

    const { selectedColourItem, isButtonDisabled } = this.state;

    const categoryBody = categories && categories.length > 0
      ? <CategoriesList categories={categories} deleteButtonClicked={deleteCategory} updateButtonClicked={updateCategory} showModal={showModal} />
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
          <div className="card__title">
            Категории
          </div>
        </div>
        <div className="card__form">
          <Input placeholder="Новая категория" changed={this.handleChangeValue} />
          <Dropdown items={dropdownItems} selectedItem={selectedColourItem} clicked={this.handleDropdownClicked} />
          <Button type="primary" size="medium" isDisabled={isButtonDisabled} clicked={() => this.handleButtonClicked()}>Добавить</Button>
        </div>
        <div className="card__divider" />
        <div className="card__body">
          {loading
            ? <Loader />
            : categoryBody}
        </div>
      </div>
    );
  }
}

CategoriesWidget.propTypes = {
  categories: PropTypes.arrayOf(CategoryType).isRequired,
  deleteCategory: PropTypes.func.isRequired,
  createCategory: PropTypes.func.isRequired,
  updateCategory: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  showModal: PropTypes.bool.isRequired,
};
