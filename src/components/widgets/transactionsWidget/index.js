import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../shared/button';
import TransactionsList from './transactionsList';
import Receipt from '../../../assets/Receipt.svg';
import { TransactionType } from '../../propTypes';
import Loader from '../../shared/loader';

const TransactionsWidget = ({
  transactions, deleteTransaction, loadingTransactions, showModal,
}) => {
  const transactionBody = transactions && transactions.length > 0
    ? <TransactionsList transactions={transactions} deleteButtonClicked={deleteTransaction} showModal={showModal} />
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
            <Button type="outline" size="small" clicked={() => showModal('CREATE_TRANSACTION', { defaultTransaction: {} })}>
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
    </>
  );
};

TransactionsWidget.propTypes = {
  transactions: PropTypes.arrayOf(TransactionType).isRequired,
  loadingTransactions: PropTypes.bool.isRequired,
  deleteTransaction: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  showModal: PropTypes.func.isRequired,
};

export default TransactionsWidget;
