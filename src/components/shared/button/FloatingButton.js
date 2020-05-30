import React from 'react';
import sprite from "../../../assets/sprite.svg";

const FloatingButton = (props) => {
    return (
        <button className="floating-button">
            <svg className="floating-button__icon"><use xlinkHref={`${sprite}#Plus`} /></svg>
        </button>
    )
};

export default FloatingButton;