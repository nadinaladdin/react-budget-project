import React from 'react';
import PropTypes from 'prop-types';
import { AccountType, TransactionType } from '../../propTypes';
import { moneyStringFormatter } from '../../../utils/stringUtils';
import { dateParser } from '../../../utils/dateUtils';

const AccountDebitsTable = ({ account, debits }) => {
  const debitsRows = debits.map((debit) => (
    <tr className="table__row" key={debit.date}>
      <td className="table__cell table__cell_hidden-text">
        {dateParser(debit.date)}
      </td>
      <td className="table__cell table__cell_number">
        {moneyStringFormatter(debit.sum)}
      </td>
    </tr>
  ));

  return (
    <table className="table">
      <thead>
        <tr className="table__row">
          <td className="table__cell table__cell_text">
            <h3 className="tertiary-header">{account.name}</h3>
          </td>
          <td className="table__cell table__cell_number">
            <h3 className="tertiary-header">
              {moneyStringFormatter(account.sum)}
            </h3>
          </td>
        </tr>
      </thead>
      <tbody>
        {debitsRows}
      </tbody>
    </table>
  );
};

export default AccountDebitsTable;

AccountDebitsTable.propTypes = {
  account: AccountType.isRequired,
  debits: PropTypes.arrayOf(TransactionType).isRequired,
};
