import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import accounts from "./accounts";

const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    accounts: accounts
     // rest of your reducers
});

export default rootReducer;