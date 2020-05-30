import React, {Component} from 'react';
import sprite from "../../../assets/sprite.svg";

const Snackbar = ({snackbarText, isMessageStateShown = true, messageState  = 'success', linkText = null}) => {
    const messageStateIcon = isMessageStateShown
                            ? (<div className={`snackbar__message-state snackbar__message-state_${messageState}`}>
                                <svg className="snackbar__icon"><use xlinkHref={`${sprite}#${messageState.charAt(0).toUpperCase()}${messageState.substring(1)}`} /></svg>
                            </div>)
                            : null;
    const snackbarLink = linkText !== null
                            ? (<a className="snackbar__link">
                                {linkText}
                            </a>)
                            : null;
    return (
        <div className="snackbar">
            {messageStateIcon}
            <div className="snackbar__text">
                {snackbarText}
                {snackbarLink}
            </div>
            <div className="snackbar__close-button">
                <svg className="snackbar__close-icon"><use xlinkHref={`${sprite}#Cross`} /></svg>
            </div>
        </div>
    );
}

export default Snackbar;