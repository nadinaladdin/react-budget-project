import React from 'react';
import sprite from "../../../assets/sprite.svg";

const OverflowMenu = (props) => {
    return (
        <div className="overflow-menu">

                <div className="overflow-menu__button">
                    <svg className="overflow-menu__icon"><use xlinkHref={`${sprite}#Ellipsis`} /></svg>
                </div>
            <div className="overflow-menu__wrapper">
                <ul className="overflow-menu__list">
                    <li className="overflow-menu__list-item">Пополнить</li>
                    <li className="overflow-menu__list-item">Редактировать</li>
                    <li className="overflow-menu__list-item overflow-menu__list-item_danger">Удалить</li>
                </ul>
            </div>
        </div>
    )
};
export default OverflowMenu;