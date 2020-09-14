import React from 'react';
import PropTypes from 'prop-types';
import sprite from '../../../assets/sprite.svg';

export const OverflowMenu = ({ children, title, customIcon }) => (
  <div className="overflow-menu">

    <div className="overflow-menu__button">
      <svg className="overflow-menu__icon">{customIcon || (<use xlinkHref={`${sprite}#Ellipsis`} />)}</svg>
      <span className="overflow-menu__title">{title}</span>
    </div>
    <div className="overflow-menu__wrapper">
      <ul className="overflow-menu__list">
        {children}
      </ul>
    </div>
  </div>
);

OverflowMenu.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  customIcon: PropTypes.node,
};

OverflowMenu.defaultProps = {
  title: null,
  customIcon: null,
};

export const OverflowMenuItem = ({ title, isDanger, clicked }) => (
  <li className={`overflow-menu__list-item ${isDanger ? 'overflow-menu__list-item_danger' : ''}`} onClick={clicked}>
    {title}
  </li>
);

OverflowMenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  isDanger: PropTypes.bool,
  clicked: PropTypes.func.isRequired,
};

OverflowMenuItem.defaultProps = {
  isDanger: false,
};
