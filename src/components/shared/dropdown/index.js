import React, {Component} from 'react';
import sprite from "../../../assets/sprite.svg";

export default class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    handleHeaderButtonClick() {
        this.setState(prevState => ({isOpen: !prevState.isOpen}));
    };

    render() {

        return (
            <div className="dropdown__wrapper">
                <div className="dropdown__header">
                    <div className="dropdown__header-title">
                        <span className="category category_green">Продукты</span>
                    </div>
                    <div className="dropdown__header-button" onClick={() => this.handleHeaderButtonClick()}>
                        <svg className={`dropdown__icon ${this.state.isOpen ? 'dropdown__icon_open' : ''}`}><use xlinkHref={`${sprite}#ChevronDown`} /></svg>
                    </div>
                </div>
                    <ul className={` dropdown__list ${this.state.isOpen ? 'dropdown__list_open' : ''}`}>
                        <li className="dropdown__list-item dropdown__list-item_active"><span className="category category_green">Продукты</span></li>
                        <li className="dropdown__list-item" onClick={() => this.handleHeaderButtonClick()}><span className="category category_red">Развлечения</span></li>
                        <li className="dropdown__list-item"><span className="category category_blue">Книги</span></li>
                        <li className="dropdown__list-item"><span className="category category_gray">Продукты</span></li>
                        <li className="dropdown__list-item"><span className="category category_violet">Развлечения</span></li>
                        <li className="dropdown__list-item"><span className="category category_yellow">Книги</span></li>
                        <li className="dropdown__list-item"><span className="category category_red">Продукты</span></li>
                        <li className="dropdown__list-item"><span className="category category_blue">Развлечения</span></li>
                    </ul>
            </div>
        )
    }
}