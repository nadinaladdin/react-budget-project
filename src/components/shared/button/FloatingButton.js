import React from 'react';
import sprite from '../../../assets/sprite.svg';

const FloatingButton = () => (
  <button className="floating-button" type="button">
    <svg className="floating-button__icon"><use xlinkHref={`${sprite}#Plus`} /></svg>
  </button>
);

export default FloatingButton;
