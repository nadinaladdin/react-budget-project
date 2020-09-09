import React from 'react';
import PropTypes from 'prop-types';
import sprite from '../../../assets/sprite.svg';

const FloatingButton = ({clicked}) => (
  <button className="floating-button" type="button" onClick={clicked}>
    <svg className="floating-button__icon"><use xlinkHref={`${sprite}#Plus`} /></svg>
  </button>
);

FloatingButton.propTypes = {
  clicked: PropTypes.func.isRequired,
};

export default FloatingButton;
