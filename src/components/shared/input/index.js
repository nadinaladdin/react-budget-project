import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ placeholder, defaultValue, changed }) => (
  <input className="input" type="text" placeholder={placeholder} defaultValue={defaultValue} onChange={(e) => changed(e.target.value)} />
);

Input.propTypes = {
  placeholder: PropTypes.string,
  changed: PropTypes.func.isRequired,
  defaultValue: PropTypes.string,
};

Input.defaultProps = {
  placeholder: '',
  defaultValue: '',
};

export default Input;
