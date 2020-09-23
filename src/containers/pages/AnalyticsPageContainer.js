import { connect } from 'react-redux';
import AnalyticsPage from '../../components/pages/analyticsPage';
import { fetchBalance, fetchMonthlyExpenses } from '../../reducers/analytics/actions';

const mapStateToProps = (state) => ({
  balance: state.analytics.balance,
  monthlyExpenses: state.analytics.monthlyExpenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchBalance: () => dispatch(fetchBalance()),
  fetchMonthlyExpenses: (year, month) => dispatch(fetchMonthlyExpenses(year, month)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AnalyticsPage);
