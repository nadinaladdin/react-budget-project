import React from 'react';
import sprite from "../../../assets/sprite.svg";
import PropTypes from 'prop-types';

const Banner = ({title, text, ...props}) => {
    return (
        <div className="banner" data-test="component-banner">
            <div className="banner__close-button">
                <svg className="banner__close-icon"><use xlinkHref={`${sprite}#Cross`} /></svg>
            </div>
            <div className="banner__title">{title}</div>
            <div className="banner__text">{text}</div>
            {props.children}
        </div>
    )
};

Banner.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    children: PropTypes.node
};

export default Banner;
