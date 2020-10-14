import React from 'react';
import PropTypes from 'prop-types';
import { dateParser } from '../../../utils/dateUtils';
import { moneyStringFormatter } from '../../../utils/stringUtils';
import { TRANSACTION_TYPES } from '../../../utils/constants';
import { OverflowMenu, OverflowMenuItem } from '../../shared/overflowMenu';
import { TransactionType } from '../../propTypes';

const TransactionsList = ({ transactions, deleteButtonClicked, showModal }) => {
  const transactionsRows = transactions.map((transaction) => (
    <tr className={`table__row${transaction.type === TRANSACTION_TYPES.DEBIT ? '_disabled' : ''}`} key={transaction.id}>
      <td className="table__cell table__cell_text">
        {dateParser(transaction.date)}
      </td>
      <td className="table__cell table__cell_number">
        {transaction.type === TRANSACTION_TYPES.DEBIT ? '+' : '−'}
        {moneyStringFormatter(transaction.sum)}
      </td>
      <td className="table__cell table__cell_text">
        { transaction.category
          ? <span className={`category category_${transaction.category.colour}`}>{transaction.category.name}</span>
          : <span className="category category_disabled">Пополнение</span>}
      </td>
      <td className="table__cell table__cell_text">
        {transaction.account.name}
      </td>
      <td className="table__cell table__cell_button">
        <OverflowMenu>
          <OverflowMenuItem title="Редактировать" clicked={() => showModal('UPDATE_TRANSACTION', { transactionToUpdate: transaction })} />
          <OverflowMenuItem title="Удалить" isDanger clicked={() => deleteButtonClicked(transaction)} />
        </OverflowMenu>
      </td>
    </tr>
  ));
  return (
    <table className="table">
      {transactionsRows}
    </table>
  );
};

TransactionsList.propTypes = {
  transactions: PropTypes.arrayOf(TransactionType).isRequired,
  deleteButtonClicked: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
};

export default TransactionsList;
