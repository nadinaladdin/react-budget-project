import React from 'react';
import PropTypes from 'prop-types';

const Badge = ({ title, colour }) => (
  <div className="badge">
    <span className={colour ? `category category_${colour}` : ''}>{title}</span>
  </div>
);

Badge.propTypes = {
  title: PropTypes.string.isRequired,
  colour: PropTypes.string,
};

Badge.defaultProps = {
  colour: null,
};

export default Badge;
