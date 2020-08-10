import React from 'react';
import PropTypes from 'prop-types';
import Input from '.';
import sprite from '../../../assets/sprite.svg';

const SearchInput = ({ defaultValue }) => (
  <div className="icon-input">
    <Input defaultValue={defaultValue} />
    <div className="icon-input__button">
      <svg className="icon-input__icon"><use xlinkHref={`${sprite}#Search`} /></svg>
    </div>
  </div>
);

SearchInput.propTypes = {
  defaultValue: PropTypes.string,
};

SearchInput.defaultProps = {
  defaultValue: '',
};

export default SearchInput;
