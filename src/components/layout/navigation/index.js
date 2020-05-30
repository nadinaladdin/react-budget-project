import React from 'react';
import Logo from '../../../assets/logo.svg'
import {
    ACCOUNTS_LOCATION,
    ANALYTICS_LOCATION,
    CATEGORIES_LOCATION,
    ROOT_LOCATION,
    TRANSACTIONS_LOCATION
} from "../../../routes";
import { NavLink } from 'react-router-dom'

const Navigation = (props) => {
    return (
        <nav className="navigation">
            <div className="navigation__logo">
                <img src={Logo} alt="logo"/>
                <h2 className="navigation__logo-name secondary-header">бюджет</h2>
            </div>
            <ul className="navigation__list">
                <li className="tertiary-header">
                    <NavLink  className="navigation__link" activeClassName="navigation__link_active" to={ANALYTICS_LOCATION}>Аналитика</NavLink>
                </li>
                <li className="tertiary-header">
                    <NavLink  className="navigation__link" activeClassName="navigation__link_active" to={TRANSACTIONS_LOCATION}>Транзакции</NavLink>
                </li>
                <li className="tertiary-header">
                    <NavLink className="navigation__link" activeClassName="navigation__link_active" to={CATEGORIES_LOCATION}>Категории</NavLink>
                </li>
                <li className="tertiary-header">
                    <NavLink className="navigation__link" activeClassName="navigation__link_active" to={ACCOUNTS_LOCATION}>Счета</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;