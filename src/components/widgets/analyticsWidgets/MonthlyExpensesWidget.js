import React, { Component } from 'react';
import { OverflowMenu, OverflowMenuItem } from '../../shared/overflowMenu';
import DonutChart from '../../shared/charts/donutChart';
import sprite from '../../../assets/sprite.svg';
import Badge from '../../shared/badge';
import { MONTH_NAME } from '../../../utils/constants';

export default class MonthlyExpensesWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMonth: new Date().getMonth(),
    };
  }

  render() {
    const { selectedMonth } = this.state;
    return (
      <div className="card">
        <div className="card__header">
          <div className="card__title">
            Траты
          </div>
          <div className="card__controls">
            <OverflowMenu title={MONTH_NAME[selectedMonth]} customIcon={<use xlinkHref={`${sprite}#Calendar`} />}>
              <OverflowMenuItem title="Март" />
              <OverflowMenuItem title="Апрель" />
              <OverflowMenuItem title="Май" />
            </OverflowMenu>
          </div>
        </div>
        <div className="card__body card__body_centered-content">
          <DonutChart />
          <h2 className="secondary-header text-promo">−17 800 ₽</h2>
          <div className="flex-wrap">
            <Badge title="Продукты" colour="green" />
            <Badge title="Развлечения" colour="gray" />
            <Badge title="Квартира" colour="orange" />
            <Badge title="Животные" colour="violet" />
            <Badge title="Книги" colour="red" />
            <Badge title="Транспорт" colour="blue" />
          </div>
        </div>
      </div>
    );
  }
}
