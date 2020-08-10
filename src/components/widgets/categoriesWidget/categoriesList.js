import React from 'react';
import PropTypes from 'prop-types';
import { OverflowMenu, OverflowMenuItem } from '../../shared/overflowMenu';
import { CategoryType } from '../../propTypes';

const CategoriesList = ({ categories, handleDeleteButton }) => {
  const categoriesRows = categories.map((category) => (
    <tr className="table__row">
      <td className="table__cell table__cell_text">
        <span className={`category category_${category.colour}`}>{category.name}</span>
      </td>
      <td className="table__cell table__cell_button">
        <OverflowMenu>
          <OverflowMenuItem title="Записать трату" />
          <OverflowMenuItem title="Редактировать" />
          <OverflowMenuItem title="Удалить" isDanger onClick={handleDeleteButton} />
        </OverflowMenu>
      </td>
    </tr>
  ));
  return (
    <table className="table">
      {categoriesRows}
    </table>
  );
};

CategoriesList.propTypes = {
  categories: PropTypes.arrayOf(CategoryType).isRequired,
  handleDeleteButton: PropTypes.func.isRequired,
};

export default CategoriesList;
