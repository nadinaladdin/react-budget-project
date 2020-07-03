import {applyMiddleware, createStore} from "redux";
import thunk from 'redux-thunk';
import { testRootReducer } from "../src/reducers";
import {routerMiddleware} from "connected-react-router";
import {history} from "../src/configureStore";

/**
 * Create a testing store with imported reducers, middleware, and initial state.
 *  globals: rootReducer, middlewares.
 * @param {object} initialState - Initial state for store.
 * @function storeFactory
 * @returns {Store} - Redux store.
 */
export const storeFactory = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
    return createStoreWithMiddleware(testRootReducer, initialState);
};
