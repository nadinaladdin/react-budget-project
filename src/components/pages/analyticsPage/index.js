import React, { Component } from 'react';
import PropsTypes from 'prop-types';
import MonthlyExpensesWidget from '../../widgets/analyticsWidgets/MonthlyExpensesWidget';
import AccountsDebitsWidget from '../../widgets/analyticsWidgets/AccountsDebitsWidget';
import BalanceWidget from '../../widgets/analyticsWidgets/BalanceWidget';
import { MonthlyExpensesType } from '../../propTypes';

export default class AnalyticsPage extends Component {
  componentDidMount() {
    const { fetchBalance, fetchMonthlyExpenses } = this.props;
    const date = new Date();
    fetchBalance();
    fetchMonthlyExpenses(date.getFullYear(), date.getMonth());
  }

  render() {
    const { balance, monthlyExpenses, fetchMonthlyExpenses } = this.props;
    return (
      <>
        <div className="content__column">
          <BalanceWidget balance={balance} />
          <MonthlyExpensesWidget monthlyExpenses={monthlyExpenses} changeMonth={fetchMonthlyExpenses} />
        </div>

        <div className="content__column">
          <AccountsDebitsWidget />
        </div>
      </>
    );
  }
}

AnalyticsPage.propTypes = {
  balance: PropsTypes.number.isRequired,
  fetchBalance: PropsTypes.func.isRequired,
  fetchMonthlyExpenses: PropsTypes.func.isRequired,
  monthlyExpenses: MonthlyExpensesType.isRequired,
};
