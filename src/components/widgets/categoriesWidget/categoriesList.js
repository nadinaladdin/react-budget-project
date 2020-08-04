import React from 'react';
import { OverflowMenu, OverflowMenuItem } from '../../shared/overflowMenu';

const CategoriesList = ({ categories }) => {
    console.log('categories', categories);
    const categoriesRows = categories.map((category, index) => (
        <tr className="table__row" key={index}>
            <td className="table__cell table__cell_text">
                <span className={`category category_${category.colour}`}>{category.name}</span>
            </td>
            <td className="table__cell table__cell_button">
                <OverflowMenu>
                    <OverflowMenuItem title="Записать трату"/>
                    <OverflowMenuItem title="Редактировать"/>
                    <OverflowMenuItem title="Удалить" isDanger={true}/>
                </OverflowMenu>
            </td>
        </tr>
    ));
    return (
        <table className="table">
            {categoriesRows}
        </table>
    )
};

export default CategoriesList;