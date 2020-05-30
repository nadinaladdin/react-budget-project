import React, {Component} from 'react';
import sprite from "../../../assets/sprite.svg";

const Banner = ({title, text, ...props}) => {
    return (
        <div className="banner">
            <div className="banner__close-button">
                <svg className="banner__close-icon"><use xlinkHref={`${sprite}#Cross`} /></svg>
            </div>
            <div className="banner__title">{title}</div>
            <div className="banner__text">{text}</div>
            {props.children}
        </div>
    )
}

export default Banner;