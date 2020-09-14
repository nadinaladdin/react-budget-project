import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../../shared/input';
import Button from '../../shared/button';
import AccountsList from './AccountsList';
import CreditCard from '../../../assets/CreditCard.svg';
import { AccountType } from '../../propTypes';

export default class AccountsWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isButtonDisabled: true,
      inputValue: null,
    };
  }

    handleChangeValue = (value) => {
      const { isButtonDisabled } = this.state;
      this.setState({ inputValue: value });
      if (!value !== isButtonDisabled) {
        this.setState({ isButtonDisabled: !value });
      }
    };

    handleButtonClicked = () => {
      const { inputValue } = this.state;
      const { createAccount } = this.props;
      const account = {
        name: inputValue,
      };
      createAccount(account);
      this.setState({
        inputValue: null,
        isButtonDisabled: true,
      });
    };

    render() {
      const {
        accounts, deleteAccount, updateAccount, loading, error,
      } = this.props;

      const { isButtonDisabled } = this.state;

      const accountBody = accounts && accounts.length > 0
        ? <AccountsList accounts={accounts} deleteButtonClicked={deleteAccount} updateButtonClicked={updateAccount} />
        : (
          <div className="empty-alert">
            <img src={CreditCard} alt="credit-card-icon" className="empty-alert__icon" />
            <h3 className="tertiary-header empty-alert__header">Добавьте свой первый счет</h3>
            <p className="footnote empty-alert__text">
              Каждое пополнение или трата
              привязывается к счёту, чтобы было легче проводить аналитику
            </p>
          </div>
        );

      return (
        <div className="card">
          <div className="card__header">
            <div className="card__title">
              Счета
            </div>
          </div>
          <div className="card__form">
            <Input placeholder="Новый счет" changed={(value) => this.handleChangeValue(value)} />
            <Button type="primary" size="medium" isDisabled={isButtonDisabled} clicked={() => this.handleButtonClicked()}>Добавить</Button>
          </div>
          <div className="card__divider" />
          <div className="card__body">
            {accountBody}
          </div>
        </div>
      );
    }
}

AccountsWidget.propTypes = {
  accounts: PropTypes.arrayOf(AccountType).isRequired,
  deleteAccount: PropTypes.func.isRequired,
  createAccount: PropTypes.func.isRequired,
  updateAccount: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};
