import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import accounts from './accounts';
import categories from './categories';
import transactions from './transactions';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  accounts,
  categories,
  transactions,
  // rest of your reducers
});

export default rootReducer;

export const testRootReducer = () => combineReducers({
  accounts,
  categories,
  transactions,
  // rest of your reducers
});
