import React from 'react';
import PropTypes from 'prop-types';
import { OverflowMenu, OverflowMenuItem } from '../../shared/overflowMenu';
import { AccountType } from '../../propTypes';

const AccountsList = ({ accounts, deleteButtonClicked, updateButtonClicked }) => {
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
          <OverflowMenuItem title="Редактировать" clicked={() => updateButtonClicked(account)} />
          <OverflowMenuItem title="Удалить" isDanger clicked={() => deleteButtonClicked(account)} />
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
  deleteButtonClicked: PropTypes.func.isRequired,
  updateButtonClicked: PropTypes.func.isRequired,
};

export default AccountsList;
