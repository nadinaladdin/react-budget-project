import React from 'react';
import MaskedInput from 'react-text-mask';
import PropTypes from 'prop-types';
import { MaskOptionsType } from '../../propTypes';

const Input = ({
  placeholder, defaultValue, changed, maskOptions, value,
}) => (
  maskOptions
    ? (
      <MaskedInput
        className="input"
        mask={maskOptions}
        type="text"
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={(e) => changed(e.target.value)}
      />
    )
    : (
      <input
        className="input"
        type="text"
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={(e) => changed(e.target.value)}
      />
    )
);

Input.propTypes = {
  placeholder: PropTypes.string,
  changed: PropTypes.func.isRequired,
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  maskOptions: PropTypes.objectOf(MaskOptionsType),
};

Input.defaultProps = {
  placeholder: '',
  defaultValue: '',
  maskOptions: null,
  value: '',
};

export default Input;
