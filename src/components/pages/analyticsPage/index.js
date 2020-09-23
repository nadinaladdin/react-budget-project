import React, { Component } from 'react';
import PropsTypes from 'prop-types';
import MonthlyExpensesWidget from '../../widgets/analyticsWidgets/MonthlyExpensesWidget';
import AccountsDebitsWidget from '../../widgets/analyticsWidgets/AccountsDebitsWidget';
import BalanceWidget from '../../widgets/analyticsWidgets/BalanceWidget';

export default class AnalyticsPage extends Component {
  componentDidMount() {
    const { fetchBalance } = this.props;
    fetchBalance();
  }

  render() {
    const { balance } = this.props;
    return (
      <>
        <div>
          <div><BalanceWidget balance={balance} /></div>
          <div style={{ marginTop: 16 }}><MonthlyExpensesWidget /></div>
        </div>

        <div><AccountsDebitsWidget /></div>
      </>
    );
  }
}

AnalyticsPage.propTypes = {
  balance: PropsTypes.number.isRequired,
  fetchBalance: PropsTypes.func.isRequired,
};
