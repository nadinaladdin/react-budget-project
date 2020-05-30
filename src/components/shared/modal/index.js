import React from 'react';
import sprite from "../../../assets/sprite.svg";

const Modal = (props) => {
    return (
        <div className="modal">
            <div className="modal__header">
                <h2 className="secondary-header">{props.title}</h2>
                <div className="modal__close-button">
                    <svg className="modal__close-icon"><use xlinkHref={`${sprite}#Cross`} /></svg>
                </div>
            </div>
            <div className="modal__body">
                {props.children}
            </div>
        </div>
    )
};

export default Modal;