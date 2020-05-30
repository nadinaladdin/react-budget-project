import React, {Component} from 'react'
import Input from "../../shared/input";
import Button from "../../shared/button";
import AccountsList from "./AccountsList";
import CreditCard from "../../../assets/CreditCard.svg"

export default class AccountWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isButtonDisabled: true,
            inputValue: null
        };
    }

    handleChangeValue = (value) => {
        this.setState({inputValue: value})
        if (!value !== this.state.isButtonDisabled) {
            this.setState({isButtonDisabled: !value});
        }
    };

    handleButtonClicked = () => {
        const {createAccount} = this.props;
        createAccount(this.state.inputValue);
        this.setState({
            inputValue: null,
            isButtonDisabled: true
        });
    };

    render() {
        const {accounts, createAccount} = this.props;

        const accountBody = accounts
            ? <AccountsList accounts={accounts}/>
            : (<div className="empty-alert">
                <img  src={CreditCard} alt="credit-card-icon" className="empty-alert__icon"/>
                <h3 className="tertiary-header empty-alert__header">Добавьте свой первый счет</h3>
                <p className="footnote empty-alert__text">Каждое пополнение или трата  привязывается к счёту, чтобы было легче проводить аналитику</p>
            </div>);

        return (
            <div className="card">
                <div className="card__header">
                    Счета
                </div>
                <div className="card__form">
                    <Input placeholder="Новый счет" changed={value => this.handleChangeValue(value)}/>
                    <Button type="primary" size="medium" isDisabled={this.state.isButtonDisabled} clicked={() => this.handleButtonClicked()}>Добавить</Button>
                </div>
                <div className="card__body">
                    {accountBody}
                </div>
            </div>
        )
    }
};