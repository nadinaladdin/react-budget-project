import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MonthlyExpensesWidget from '../../widgets/analyticsWidgets/MonthlyExpensesWidget';
import AccountsDebitsWidget from '../../widgets/analyticsWidgets/AccountsDebitsWidget';
import BalanceWidget from '../../widgets/analyticsWidgets/BalanceWidget';
import { AccountsDebitsType, MonthlyExpensesType } from '../../propTypes';

export default class AnalyticsPage extends Component {
  componentDidMount() {
    const { fetchBalance, fetchMonthlyExpenses, fetchAccountsDebits } = this.props;
    const date = new Date();
    fetchBalance();
    fetchMonthlyExpenses(date.getFullYear(), date.getMonth());
    fetchAccountsDebits(date.getFullYear(), date.getMonth());
  }

  render() {
    const {
      balance, monthlyExpenses, fetchMonthlyExpenses, accountsDebits, fetchAccountsDebits,
    } = this.props;
    return (
      <>
        <div className="content__column">
          <BalanceWidget balance={balance} />
          <MonthlyExpensesWidget monthlyExpenses={monthlyExpenses} changeMonth={fetchMonthlyExpenses} />
        </div>

        <div className="content__column">
          <AccountsDebitsWidget accountsDebits={accountsDebits} changeMonth={fetchAccountsDebits} />
        </div>
      </>
    );
  }
}

AnalyticsPage.propTypes = {
  balance: PropTypes.number.isRequired,
  fetchBalance: PropTypes.func.isRequired,
  fetchMonthlyExpenses: PropTypes.func.isRequired,
  monthlyExpenses: MonthlyExpensesType.isRequired,
  fetchAccountsDebits: PropTypes.func.isRequired,
  accountsDebits: PropTypes.arrayOf(AccountsDebitsType).isRequired,
};
