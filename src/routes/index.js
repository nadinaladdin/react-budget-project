import React from 'react'
import {Redirect, Route, Switch} from 'react-router'
import LayoutContainer from "../containers/LayoutContainer";
import AnalyticsPageContainer from "../containers/pages/AnalyticsPageContainer";
import TransactionsPageContainer from "../containers/pages/TransactionsPageContainer";
import CategoriesPageContainer from "../containers/pages/CategoriesPageContainer";
import AccountsPageContainer from "../containers/pages/AccountsPageContainer";

export const ROOT_LOCATION = '/';
export const ANALYTICS_LOCATION = '/analytics';
export const TRANSACTIONS_LOCATION = '/transactions';
export const CATEGORIES_LOCATION = '/categories';
export const ACCOUNTS_LOCATION = '/accounts';

const routes = (
    <React.Fragment>
        <LayoutContainer>
            <Redirect from={ROOT_LOCATION} to={ANALYTICS_LOCATION} />
            <Route path={ANALYTICS_LOCATION} component={AnalyticsPageContainer}/>
            <Route path={TRANSACTIONS_LOCATION} component={TransactionsPageContainer}/>
            <Route path={CATEGORIES_LOCATION} component={CategoriesPageContainer}/>
            <Route path={ACCOUNTS_LOCATION} component={AccountsPageContainer}/>
        </LayoutContainer>
    </React.Fragment>
);

export default routes;