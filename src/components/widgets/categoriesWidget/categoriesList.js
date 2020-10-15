import React from 'react';
import PropTypes from 'prop-types';
import { OverflowMenu, OverflowMenuItem } from '../../shared/overflowMenu';
import { CategoryType } from '../../propTypes';
import { TRANSACTION_TYPES } from '../../../utils/constants';

const CategoriesList = ({
  categories, deleteButtonClicked, updateButtonClicked, showModal,
}) => {
  const categoriesRows = categories.map((category) => (
    <tr className="table__row" key={category.id}>
      <td className="table__cell table__cell_text">
        <span className={`category category_${category.colour}`}>{category.name}</span>
      </td>
      <td className="table__cell table__cell_button">
        <OverflowMenu>
          <OverflowMenuItem
            title="Записать трату"
            clicked={() => showModal('CREATE_TRANSACTION', { defaultTransaction: { type: TRANSACTION_TYPES.CREDIT, category } })}
          />
          <OverflowMenuItem title="Редактировать" clicked={() => updateButtonClicked(category)} />
          <OverflowMenuItem title="Удалить" isDanger clicked={() => deleteButtonClicked(category)} />
        </OverflowMenu>
      </td>
    </tr>
  ));
  return (
    <table className="table">
      <tbody>
        {categoriesRows}
      </tbody>
    </table>
  );
};

CategoriesList.propTypes = {
  categories: PropTypes.arrayOf(CategoryType).isRequired,
  deleteButtonClicked: PropTypes.func.isRequired,
  updateButtonClicked: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
};

export default CategoriesList;
