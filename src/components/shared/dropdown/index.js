import React, { Component } from 'react';
import PropTypes from 'prop-types';
import sprite from '../../../assets/sprite.svg';
import { DropdownItemsType } from '../../propTypes';

export default class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleHeaderButtonClick() {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    const { items } = this.props;
    const { isOpen } = this.state;
    let selectedItem = null;
    // temporary
    if (items && items.length >= 0) {
      [selectedItem] = items;
    }

    const dropdownItems = items.map(
      (item) => (
        <li className={`dropdown__list-item ${selectedItem === item ? 'dropdown__list-item_active' : ''}`}>
          <span className={`category category_${item.colour}`}>{item.title}</span>
        </li>
      ),
    );

    return (
      <div className="dropdown__wrapper">
        <div className="dropdown__header">
          <div className="dropdown__header-title">
            <span className={`category category_${selectedItem.colour}`}>{selectedItem.title}</span>
          </div>
          <div className="dropdown__header-button" onClick={() => this.handleHeaderButtonClick()}>
            <svg className={`dropdown__icon ${isOpen ? 'dropdown__icon_open' : ''}`}><use xlinkHref={`${sprite}#ChevronDown`} /></svg>
          </div>
        </div>
        <ul className={` dropdown__list ${isOpen ? 'dropdown__list_open' : ''}`}>
          {dropdownItems}
        </ul>
      </div>
    );
  }
}

Dropdown.propTypes = {
  items: PropTypes.arrayOf(DropdownItemsType).isRequired,
};
