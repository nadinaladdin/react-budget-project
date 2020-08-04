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
        const { items } = this.props;
        let selectedItem = null;
        //temporary
        if (items && items.length >= 0) {
            selectedItem = items[0];
        }

        const dropdownItems = items.map((item, index) => 
            <li className={`dropdown__list-item ${selectedItem === item ? 'dropdown__list-item_active' : ''}`}><span className={`category category_${item.colour}`}>{item.title}</span></li>
        );
        return (
            <div className="dropdown__wrapper">
                <div className="dropdown__header">
                    <div className="dropdown__header-title">
                        <span className={`category category_${selectedItem.colour}`}>{selectedItem.title}</span>
                    </div>
                    <div className="dropdown__header-button" onClick={() => this.handleHeaderButtonClick()}>
                        <svg className={`dropdown__icon ${this.state.isOpen ? 'dropdown__icon_open' : ''}`}><use xlinkHref={`${sprite}#ChevronDown`} /></svg>
                    </div>
                </div>
                    <ul className={` dropdown__list ${this.state.isOpen ? 'dropdown__list_open' : ''}`}>
                        {dropdownItems}
                    </ul>
            </div>
        )
    }
}