import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import accounts from './accounts';
import categories from './categories';
import transactions from './transactions';
import analytics from './analytics';
import messages from './messages';
import modal from './modal';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  accounts,
  categories,
  transactions,
  analytics,
  messages,
  modal,
  // rest of your reducers
});

export default rootReducer;

export const testRootReducer = () => combineReducers({
  accounts,
  categories,
  transactions,
  analytics,
  messages,
  modal,
  // rest of your reducers
});
