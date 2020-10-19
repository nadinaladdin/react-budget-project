import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../../shared/input';
import Button from '../../shared/button';
import AccountsList from './AccountsList';
import CreditCard from '../../../assets/CreditCard.svg';
import { AccountType } from '../../propTypes';
import Loader from '../../shared/loader';
import Banner from '../../shared/banner';
import { TRANSACTION_TYPES } from '../../../utils/constants';

export default class AccountsWidget extends Component {
  constructor(props) {
    super(props);
    const accountBannerIsHide = localStorage.getItem('accountBannerIsHide');
    this.state = {
      isButtonDisabled: true,
      inputValue: null,
      accountBannerIsHide: accountBannerIsHide ? JSON.parse(accountBannerIsHide) : false,
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

    handleAccountBannerClosed = () => {
      this.setState({ accountBannerIsHide: true });
      localStorage.setItem('accountBannerIsHide', true);
    }

    render() {
      const {
        accounts, deleteAccount, updateAccount, loading, error, showModal,
      } = this.props;

      const { isButtonDisabled, accountBannerIsHide } = this.state;

      const accountBody = accounts && accounts.length > 0
        ? <AccountsList accounts={accounts} deleteButtonClicked={deleteAccount} updateButtonClicked={updateAccount} showModal={showModal} />
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

      const accountBanner = !accountBannerIsHide && accounts && accounts.length === 1 && accounts[0].sum === 0
        ? (
          <Banner
            close={this.handleAccountBannerClosed}
            title="Осталось пополнить счёт 🎉"
            text="Запишите текущий баланс счёта, чтобы было, что тратить. Потом можно будет внести первые расходы."
          >
            <Button
              size="small"
              type="primary"
              clicked={() => showModal('CREATE_TRANSACTION', { defaultTransaction: { account: accounts[0], type: TRANSACTION_TYPES.DEBIT } })}
            >
              Пополнить счет
            </Button>
          </Banner>
        )
        : null;

      return (
        <div className="card">
          <div className="card__header">
            <div className="card__title">
              Счета
            </div>
          </div>
          <div className="card__form">
            <Input placeholder="Новый счет" changed={this.handleChangeValue} />
            <Button type="primary" size="medium" isDisabled={isButtonDisabled} clicked={() => this.handleButtonClicked()}>Добавить</Button>
          </div>
          <div className="card__divider" />
          <div className="card__body">
            {loading
              ? <Loader />
              : (
                <>
                  {accountBody}
                  {' '}
                  {accountBanner}
                </>
              ) }
          </div>
        </div>
      );
    }
}

AccountsWidget.propTypes = {
  accounts: PropTypes.arrayOf(AccountType),
  deleteAccount: PropTypes.func.isRequired,
  createAccount: PropTypes.func.isRequired,
  updateAccount: PropTypes.func.isRequired,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  showModal: PropTypes.func.isRequired,
};

AccountsWidget.defaultProps = {
  accounts: null,
  error: null,
};
