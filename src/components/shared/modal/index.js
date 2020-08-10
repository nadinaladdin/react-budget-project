import React from 'react';
import PropTypes from 'prop-types';
import sprite from '../../../assets/sprite.svg';

const Modal = ({ children, title }) => (
  <div className="modal">
    <div className="modal__header">
      <h2 className="secondary-header">{title}</h2>
      <div className="modal__close-button">
        <svg className="modal__close-icon"><use xlinkHref={`${sprite}#Cross`} /></svg>
      </div>
    </div>
    <div className="modal__body">
      {children}
    </div>
  </div>
);

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
