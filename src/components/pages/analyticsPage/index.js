import React, { Component } from 'react';
import PropsTypes from 'prop-types';
import MonthlyExpensesWidget from '../../widgets/analyticsWidgets/MonthlyExpensesWidget';
import AccountsDebitsWidget from '../../widgets/analyticsWidgets/AccountsDebitsWidget';
import BalanceWidget from '../../widgets/analyticsWidgets/BalanceWidget';

export default class AnalyticsPage extends Component {
  componentDidMount() {
    const { fetchBalance, fetchMonthlyExpenses } = this.props;
    const date = new Date();
    fetchBalance();
    fetchMonthlyExpenses(date.getFullYear(), date.getMonth());
  }

  render() {
    const { balance, monthlyExpenses } = this.props;
    console.log('BALANCE ', balance);
    return (
      <>
        <div>
          <div><BalanceWidget balance={balance} /></div>
          <div style={{ marginTop: 16 }}><MonthlyExpensesWidget monthlyExpenses={monthlyExpenses} /></div>
        </div>

        <div><AccountsDebitsWidget /></div>
      </>
    );
  }
}

AnalyticsPage.propTypes = {
  balance: PropsTypes.number.isRequired,
  fetchBalance: PropsTypes.func.isRequired,
  fetchMonthlyExpenses: PropsTypes.func.isRequired,
};
