import React from 'react';

const AccountDebitsTable = (props) => (
  <table className="table">
    <tr className="table__row">
      <td className="table__cell table__cell_text">
        <h3 className="tertiary-header">Зарплатная карта</h3>
      </td>
      <td className="table__cell table__cell_number">
        <h3 className="tertiary-header">
          + 34 000
          {' '}
          ₽
        </h3>
      </td>
    </tr>
    <tr className="table__row">
      <td className="table__cell table__cell_hidden-text">
        2 дня назад
      </td>
      <td className="table__cell table__cell_number">
        + 45 000
        {' '}
        ₽
      </td>
    </tr>
    <tr className="table__row">
      <td className="table__cell table__cell_hidden-text">
        30 августа
      </td>
      <td className="table__cell table__cell_number">
        + 34 000
        {' '}
        ₽
      </td>
    </tr>
  </table>
);

export default AccountDebitsTable;
