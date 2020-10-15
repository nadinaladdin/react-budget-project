import React from 'react';
import PropTypes from 'prop-types';
import { OverflowMenu, OverflowMenuItem } from '../../shared/overflowMenu';
import { AccountType } from '../../propTypes';
import { TRANSACTION_TYPES } from '../../../utils/constants';

const AccountsList = ({
  accounts, deleteButtonClicked, updateButtonClicked, showModal,
}) => {
  const tableRows = accounts.map((account) => (
    <tr className="table__row" key={account.id}>
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
          <OverflowMenuItem
            title="Пополнить"
            clicked={() => showModal('CREATE_TRANSACTION', { defaultTransaction: { account, type: TRANSACTION_TYPES.DEBIT } })}
          />
          <OverflowMenuItem title="Редактировать" clicked={() => updateButtonClicked(account)} />
          <OverflowMenuItem title="Удалить" isDanger clicked={() => deleteButtonClicked(account)} />
        </OverflowMenu>
      </td>
    </tr>
  ));
  return (
    <table className="table">
      <tbody>
        {tableRows}
      </tbody>
    </table>
  );
};

AccountsList.propTypes = {
  accounts: PropTypes.arrayOf(AccountType).isRequired,
  deleteButtonClicked: PropTypes.func.isRequired,
  updateButtonClicked: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
};

export default AccountsList;
