import React from 'react';
import '../../src/styles/main.scss';
import { OverflowMenu, OverflowMenuItem } from '../../src/components/shared/overflowMenu';

export default {
  title: 'Tables',
};

export const TableStory = () => (
  <div className="story">
    <div className="story__title">
      <h1 className="primary-header">
        Table
      </h1>
    </div>
    <div className="story__subtitle">
      <h3 className="tertiary-header">
        Small table
      </h3>
    </div>
    <div className="component-container">
      <div className="component-container__row" />
      <div className="width-30">

        <table className="table">
          <tr className="table__row">
            <td className="table__cell table__cell_text">
              Кредитная карта
            </td>
            <td className="table__cell table__cell_number">
              2000  ₽
            </td>
            <td className="table__cell table__cell_button">
              <OverflowMenu>
                <OverflowMenuItem title="Пополнить" />
                <OverflowMenuItem title="Редактировать" />
                <OverflowMenuItem title="Удалить" isDanger />
              </OverflowMenu>
            </td>
          </tr>
          <tr className="table__row">
            <td className="table__cell table__cell_text">
              Кредитная карта
            </td>
            <td className="table__cell table__cell_number">
              2000  ₽
            </td>
            <td className="table__cell table__cell_button">
              <OverflowMenu>
                <OverflowMenuItem title="Пополнить" />
                <OverflowMenuItem title="Редактировать" />
                <OverflowMenuItem title="Удалить" isDanger />
              </OverflowMenu>
            </td>
          </tr>
          <tr className="table__row">
            <td className="table__cell table__cell_text">
              Кредитная карта
            </td>
            <td className="table__cell table__cell_number">
              2000  ₽
            </td>
            <td className="table__cell table__cell_button">
              <OverflowMenu>
                <OverflowMenuItem title="Пополнить" />
                <OverflowMenuItem title="Редактировать" />
                <OverflowMenuItem title="Удалить" isDanger />
              </OverflowMenu>
            </td>
          </tr>
          <tr className="table__row">
            <td className="table__cell table__cell_text">
              Кредитная карта
            </td>
            <td className="table__cell table__cell_number">
              2000  ₽
            </td>
            <td className="table__cell table__cell_button">
              <OverflowMenu>
                <OverflowMenuItem title="Пополнить" />
                <OverflowMenuItem title="Редактировать" />
                <OverflowMenuItem title="Удалить" isDanger />
              </OverflowMenu>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div className="story__subtitle">
      <h3 className="tertiary-header">
        Large table
      </h3>
    </div>
    <div className="component-container">
      <div className="component-container__row" />
      <div className="width-70">
        <table className="table">
          <tr className="table__row">
            <td className="table__cell table__cell_header" rowSpan="3">
              Сегодня
            </td>
            <td className="table__cell table__cell_number">
              -400
              {' '}
              ₽
            </td>
            <td className="table__cell table__cell_text">
              <span className="category category_violet">Одежда</span>
            </td>
            <td className="table__cell table__cell_text">
              Зарплатная карта
            </td>
            <td className="table__cell table__cell_button">
              <OverflowMenu>
                <OverflowMenuItem title="Пополнить" />
                <OverflowMenuItem title="Редактировать" />
                <OverflowMenuItem title="Удалить" isDanger />
              </OverflowMenu>
            </td>
          </tr>
          <tr className="table__row">
            <td className="table__cell table__cell_number">
              -400
              {' '}
              ₽
            </td>
            <td className="table__cell table__cell_text">
              <span className="category category_violet">Одежда</span>
            </td>
            <td className="table__cell table__cell_text">
              Зарплатная карта
            </td>
            <td className="table__cell table__cell_button">
              <OverflowMenu>
                <OverflowMenuItem title="Пополнить" />
                <OverflowMenuItem title="Редактировать" />
                <OverflowMenuItem title="Удалить" isDanger />
              </OverflowMenu>
            </td>
          </tr>
          <tr className="table__row table__row_divider">
            <td className="table__cell table__cell_number">
              -400
              {' '}
              ₽
            </td>
            <td className="table__cell table__cell_text">
              <span className="category category_violet">Одежда</span>
            </td>
            <td className="table__cell table__cell_text">
              Зарплатная карта
            </td>
            <td className="table__cell table__cell_button">
              <OverflowMenu>
                <OverflowMenuItem title="Пополнить" />
                <OverflowMenuItem title="Редактировать" />
                <OverflowMenuItem title="Удалить" isDanger />
              </OverflowMenu>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
);
