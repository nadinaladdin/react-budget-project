import { connect } from 'react-redux';
import AnalyticsPage from '../../components/pages/analyticsPage';
import { fetchAccountsDebits, fetchBalance, fetchMonthlyExpenses } from '../../reducers/analytics/actions';

const mapStateToProps = (state) => ({
  balance: state.analytics.balance,
  monthlyExpenses: state.analytics.monthlyExpenses,
  accountsDebits: state.analytics.accountsDebits,
});

const mapDispatchToProps = (dispatch) => ({
  fetchBalance: () => dispatch(fetchBalance()),
  fetchMonthlyExpenses: (year, month) => dispatch(fetchMonthlyExpenses(year, month)),
  fetchAccountsDebits: (year, month) => dispatch(fetchAccountsDebits(year, month)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AnalyticsPage);
