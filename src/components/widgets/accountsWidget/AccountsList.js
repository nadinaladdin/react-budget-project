import React from 'react'
import { OverflowMenu, OverflowMenuItem } from '../../shared/overflowMenu'

const AccountsList = ({accounts}) => {
    const tableRows = accounts.map((account, index) => (
        <tr className="table__row" key={index}>
            <td className="table__cell table__cell_text">
                {account.name}
            </td>
            <td className="table__cell table__cell_number">
                {account.sum} ₽
            </td>
            <td className="table__cell table__cell_button">
                <OverflowMenu>
                    <OverflowMenuItem title="Пополнить"/>
                    <OverflowMenuItem title="Редактировать"/>
                    <OverflowMenuItem title="Удалить" isDanger={true}/>
                </OverflowMenu>
            </td>
        </tr>
    ));
   return (
       <table className="table">
           {tableRows}
       </table>
   )
};

export default AccountsList;
