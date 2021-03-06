import React from 'react';
import PropTypes from 'prop-types';

export const MESSAGE = {
  hint: 'hint',
  error: 'error',
};

const FormItem = ({
  fieldName, message, messageType = 'hint', children,
}) => {
  const messageBox = message
    ? (
      <div className={`form-item__message ${messageType === MESSAGE.error ? 'form-item__message_error' : ''}`}>
        {message}
      </div>
    )
    : null;
  return (
    <div className="form-item">
      <label className="form-item__label">{fieldName}</label>
      {children}
      {messageBox}
    </div>
  );
};

FormItem.propTypes = {
  fieldName: PropTypes.string.isRequired,
  message: PropTypes.string,
  messageType: PropTypes.string,
  children: PropTypes.node,
};

FormItem.defaultProps = {
  messageType: MESSAGE.hint,
  message: '',
  children: null,
};

export default FormItem;
