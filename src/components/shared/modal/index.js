import React, { Component } from 'react';
import PropTypes from 'prop-types';
import sprite from '../../../assets/sprite.svg';

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef();
  }

  handleClickOutside = (event) => {
    const { close } = this.props;
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
      close();
    }
  }

  render() {
    const {
      body, header, controls, close,
    } = this.props;
    return (
      <div className="modal" onClick={this.handleClickOutside}>
        <div className="modal__container" ref={this.wrapperRef}>
          <div className="modal__header">
            {header}
            <div className="modal__close-button" onClick={close}>
              <svg className="modal__close-icon"><use xlinkHref={`${sprite}#Cross`} /></svg>
            </div>
          </div>
          <div className="modal__body">
            {body}
            <div className="modal__controls">
              {controls}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  header: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired,
  controls: PropTypes.node.isRequired,
  close: PropTypes.func.isRequired,
};
