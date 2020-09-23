import React from 'react';
import PropTypes from 'prop-types';
import { dateParser } from '../../../utils/dateUtils';
import { moneyStringFormatter } from '../../../utils/stringUtils';
import { TRANSACTION_TYPES } from '../../../utils/constants';
import { OverflowMenu, OverflowMenuItem } from '../../shared/overflowMenu';
import { TransactionType } from '../../propTypes';

const TransactionsList = ({ transactions, deleteButtonClicked, updateButtonClicked }) => {
  const transactionsRows = transactions.map((transaction) => (
    <tr className="table__row" key={transaction.id}>
      <td className="table__cell table__cell_text">
        {dateParser(transaction.date)}
      </td>
      <td className="table__cell table__cell_number">
        {transaction.type === TRANSACTION_TYPES.DEBIT ? '+' : '−'}
        {moneyStringFormatter(transaction.sum)}
      </td>
      { transaction.category && (
      <td className="table__cell table__cell_text">
        <span className={`category category_${transaction.category.colour}`}>{transaction.category.name}</span>
      </td>
      ) }
      <td className="table__cell table__cell_text">
        {transaction.account.name}
      </td>
      <td className="table__cell table__cell_button">
        <OverflowMenu>
          <OverflowMenuItem title="Редактировать" clicked={() => updateButtonClicked(transaction)} />
          <OverflowMenuItem title="Удалить" isDanger clicked={() => deleteButtonClicked(transaction.id)} />
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
  updateButtonClicked: PropTypes.func.isRequired,
};

export default TransactionsList;
