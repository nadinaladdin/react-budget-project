import React, { Component } from 'react';
import { DateTime } from 'luxon';
import PropTypes from 'prop-types';
import { OverflowMenu, OverflowMenuItem } from '../../shared/overflowMenu';
import DonutChart from '../../charts/donutChart';
import sprite from '../../../assets/sprite.svg';
import Badge from '../../shared/badge';
import { MONTH_NAME } from '../../../utils/constants';
import { MonthlyExpensesData } from '../../propTypes';
import { moneyStringFormatter } from '../../../utils/stringUtils';

const VISIBLE_AMOUNT_OF_MONTHS = 3;

export default class MonthlyExpensesWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMonth: DateTime.local().month,
    };
  }

  render() {
    const { selectedMonth } = this.state;
    const { monthlyExpenses, changeMonth } = this.props;

    const overflowMenuItems = [];

    for (let i = 0; i < VISIBLE_AMOUNT_OF_MONTHS; i += 1) {
      const { month } = DateTime.local().minus({ months: i + 1 });
      overflowMenuItems.push(<OverflowMenuItem title={MONTH_NAME[month]} onClick={() => changeMonth(month)} />);
    }

    return (
      <div className="card">
        <div className="card__header">
          <div className="card__title">
            Траты
          </div>
          <div className="card__controls">
            <OverflowMenu title={MONTH_NAME[selectedMonth]} customIcon={<use xlinkHref={`${sprite}#Calendar`} />}>
              {overflowMenuItems}
            </OverflowMenu>
          </div>
        </div>
        <div className="card__body card__body_centered-content">
          {monthlyExpenses.expenses
          && (
          <>
            <DonutChart data={monthlyExpenses.expenses} />
            <h2 className="secondary-header text-promo">
              −
              {moneyStringFormatter(monthlyExpenses.total)}
            </h2>
            <div className="flex-wrap">
              {monthlyExpenses.expenses.map((item) => <Badge title={item.name} colour={item.colour} key={item.name} />)}
            </div>
          </>
          )}
        </div>
      </div>
    );
  }
}

MonthlyExpensesWidget.propTypes = {
  monthlyExpenses: MonthlyExpensesData.isRequired,
  changeMonth: PropTypes.func.isRequired,
};
