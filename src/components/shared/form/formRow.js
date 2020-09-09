import React from 'react';
import PropTypes from 'prop-types';

const FormRow = ({ children }) => (
  <div className="form-row">
    {children}
  </div>
);

FormRow.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormRow;
