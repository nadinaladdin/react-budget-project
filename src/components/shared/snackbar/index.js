import React from 'react';
import PropTypes from 'prop-types';
import sprite from '../../../assets/sprite.svg';

const Snackbar = ({
  snackbarText, messageState, linkText, linkClicked, close, id,
}) => {
  const messageStateIcon = messageState
    ? (
      <div className={`snackbar__message-state snackbar__message-state_${messageState}`}>
        <svg className="snackbar__icon"><use xlinkHref={`${sprite}#${messageState.charAt(0).toUpperCase()}${messageState.substring(1)}`} /></svg>
      </div>
    )
    : null;
  const snackbarLink = linkText !== null
    ? (
      <a className="snackbar__link" onClick={linkClicked}>
        {linkText}
      </a>
    )
    : null;
  return (
    <div className="snackbar">
      {messageStateIcon}
      <div className="snackbar__text">
        {snackbarText}
        {snackbarLink}
      </div>
      <div className="snackbar__close-button" onClick={() => close(id)}>
        <svg className="snackbar__close-icon"><use xlinkHref={`${sprite}#Cross`} /></svg>
      </div>
    </div>
  );
};

Snackbar.propTypes = {
  snackbarText: PropTypes.string.isRequired,
  messageState: PropTypes.string,
  linkText: PropTypes.string,
  linkClicked: PropTypes.func,
  close: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

Snackbar.defaultProps = {
  messageState: null,
  linkText: null,
  linkClicked: null,
};

export default Snackbar;
