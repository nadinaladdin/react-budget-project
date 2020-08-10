import React from 'react';
import PropTypes from 'prop-types';
import sprite from '../../../assets/sprite.svg';

const Banner = ({ title, text, children }) => (
  <div className="banner" data-test="component-banner">
    <div className="banner__close-button">
      <svg className="banner__close-icon"><use xlinkHref={`${sprite}#Cross`} /></svg>
    </div>
    <div className="banner__title">{title}</div>
    <div className="banner__text">{text}</div>
    {children}
  </div>
);

Banner.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.node,
};

Banner.defaultProps = {
  title: '',
  text: '',
  children: null,
};

export default Banner;
