import React from 'react';
import PropTypes from 'prop-types';

export const BUTTON_TYPE = {
  primary: 'primary',
  secondary: 'secondary',
  outline: 'outline',
};

export const BUTTON_SIZE = {
  small: 'small',
  medium: 'medium',
  large: 'large',
};
const Button = ({
  children, type, size, clicked, isDisabled, isDanger,
}) => {
  const buttonClass = `button button_${type} button_${size} ${isDanger ? `button_${type}_danger` : ''} ${isDisabled ? 'button_disabled' : ''}`;

  return (
    <button type="button" className={buttonClass} onClick={(e) => clicked(e)}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
  clicked: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
  isDanger: PropTypes.bool,
  size: PropTypes.string.isRequired,
};

Button.defaultProps = {
  isDanger: false,
  isDisabled: false,
};

export default Button;
