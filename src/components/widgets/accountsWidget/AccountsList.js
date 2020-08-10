import React from 'react';
import PropTypes from 'prop-types';
import { OverflowMenu, OverflowMenuItem } from '../../shared/overflowMenu';
import { AccountType } from '../../propTypes';

const AccountsList = ({ accounts }) => {
  const tableRows = accounts.map((account) => (
    <tr className="table__row">
      <td className="table__cell table__cell_text">
        {account.name}
      </td>
      <td className="table__cell table__cell_number">
        {account.sum}
        {' '}
        ₽
      </td>
      <td className="table__cell table__cell_button">
        <OverflowMenu>
          <OverflowMenuItem title="Пополнить" />
          <OverflowMenuItem title="Редактировать" />
          <OverflowMenuItem title="Удалить" isDanger />
        </OverflowMenu>
      </td>
    </tr>
  ));
  return (
    <table className="table">
      {tableRows}
    </table>
  );
};

AccountsList.propTypes = {
  accounts: PropTypes.arrayOf(AccountType).isRequired,
};

export default AccountsList;
