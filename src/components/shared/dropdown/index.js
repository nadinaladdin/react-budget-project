import React, { Component } from 'react';
import PropTypes from 'prop-types';
import sprite from '../../../assets/sprite.svg';
import { DropdownItemsType } from '../../propTypes';

export default class Dropdown extends Component {
  constructor(props) {
    super(props);
    const { defaultSelectedItem } = this.props;
    this.state = {
      isOpen: false,
      selectedItem: defaultSelectedItem,
    };
  }

  handleHeaderButtonClick = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }

  handleItemClick = (item) => {
    const { clicked } = this.props;
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
      selectedItem: item,
    }));
    clicked(item);
  }

  render() {
    const { items } = this.props;
    const { isOpen, selectedItem } = this.state;

    const dropdownItems = items.map(
      (item) => (
        <li
          key={item}
          className={`dropdown__list-item ${selectedItem === item ? 'dropdown__list-item_active' : ''}`}
          onClick={() => this.handleItemClick(item)}
        >
          <span className={item.colour ? `category category_${item.colour}` : ''}>{item.title}</span>
        </li>
      ),
    );

    return (
      <div className="dropdown__wrapper">
        <div className={`dropdown__header ${isOpen ? 'dropdown__header_active' : ''}`}>
          <div className="dropdown__header-title">
            { selectedItem && <span className={selectedItem.colour ? `category category_${selectedItem.colour}` : ''}>{selectedItem.title}</span> }
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
  clicked: PropTypes.func.isRequired,
  defaultSelectedItem: PropTypes.shape(DropdownItemsType),
};

Dropdown.defaultProps = {
  defaultSelectedItem: null,
};
