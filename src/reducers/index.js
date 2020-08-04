import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import accounts from "./accounts";
import categories from './categories';

const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    accounts: accounts,
    categories: categories
    // rest of your reducers
});

export default rootReducer;

export const testRootReducer = () => combineReducers({
    accounts: accounts,
    categories: categories
    // rest of your reducers
});
