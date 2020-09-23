import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../../shared/button';
import TransactionsList from './transactionsList';
import Receipt from '../../../assets/Receipt.svg';
import TransactionModal from '../../modals/transactionModal';
import { TransactionType, CategoryType, AccountType } from '../../propTypes';
import Loader from '../../shared/loader';

export default class TransactionsWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenModal: false,
    };
  }

  handleModalVisibility = () => {
    this.setState((prevState) => ({ isOpenModal: !prevState.isOpenModal }));
  }

  render() {
    const {
      transactions, updateTransaction, deleteTransaction, loadingTransactions, error, categories, accounts,
    } = this.props;

    const { isOpenModal } = this.state;

    const transactionBody = transactions && transactions.length > 0
      ? <TransactionsList transactions={transactions} deleteButtonClicked={deleteTransaction} updateButtonClicked={updateTransaction} />
      : (
        <div className="empty-alert">
          <img src={Receipt} alt="credit-card-icon" className="empty-alert__icon" />
          <h3 className="tertiary-header empty-alert__header">Добавьте свою первую трату</h3>
          <p className="footnote empty-alert__text">
            Всё в нашем приложении строится вокруг трат: если запишите все, сможем показать аналитику и показать, на что больше всего уходит денег
          </p>
        </div>
      );
    return (
      <>
        <div className="card">
          <div className="card__header">
            <div className="card__title">
              Транзакции
            </div>
            <div className="card__controls">
              <Button type="outline" size="small" clicked={this.handleModalVisibility}>
                Добавить транзакцию
              </Button>
            </div>
          </div>
          <div className="card__divider" />
          <div className="card__body">
            {loadingTransactions
              ? <Loader />
              : transactionBody}
          </div>
        </div>
        <TransactionModal
          isOpen={isOpenModal}
          close={this.handleModalVisibility}
          categories={categories}
          accounts={accounts}
        />
      </>
    );
  }
}

TransactionsWidget.propTypes = {
  transactions: PropTypes.arrayOf(TransactionType).isRequired,
  loadingTransactions: PropTypes.bool.isRequired,
  deleteTransaction: PropTypes.func.isRequired,
  updateTransaction: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  categories: PropTypes.arrayOf(CategoryType).isRequired,
  accounts: PropTypes.arrayOf(AccountType).isRequired,
};
