import React from 'react';
import sprite from "../../../assets/sprite.svg";

export const OverflowMenu = ({ children }) => {

    return (
        <div className="overflow-menu">

                <div className="overflow-menu__button">
                    <svg className="overflow-menu__icon"><use xlinkHref={`${sprite}#Ellipsis`} /></svg>
                </div>
            <div className="overflow-menu__wrapper">
                <ul className="overflow-menu__list">
                    {children}
                </ul>
            </div>
        </div>
    )
};

export const OverflowMenuItem = ({ title, func, isDanger = false}) => {
    return (
        <li 
        className={`overflow-menu__list-item ${isDanger ? 'overflow-menu__list-item_danger' : ''}`}
        onClick={func}>
            {title}
        </li>
    )
}