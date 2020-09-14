import React from 'react';
import MonthlyExpensesWidget from '../../widgets/analyticsWidgets/MonthlyExpensesWidget';
import AccountsDebitsWidget from '../../widgets/analyticsWidgets/AccountsDebitsWidget';
import BalanceWidget from '../../widgets/analyticsWidgets/BalanceWidget';

const AnalyticsPage = (props) => (
  <>
    <div>
      <div><BalanceWidget balance={15000} /></div>
      <div style={{ marginTop: 16 }}><MonthlyExpensesWidget /></div>
    </div>

    <div><AccountsDebitsWidget /></div>
  </>
);

export default AnalyticsPage;
