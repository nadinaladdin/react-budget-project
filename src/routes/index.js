import React from 'react';
import { Redirect, Route } from 'react-router';
import LayoutContainer from '../containers/LayoutContainer';
import AnalyticsPageContainer from '../containers/pages/AnalyticsPageContainer';
import TransactionsPageContainer from '../containers/pages/TransactionsPageContainer';
import CategoriesPageContainer from '../containers/pages/CategoriesPageContainer';
import AccountsPageContainer from '../containers/pages/AccountsPageContainer';
import {
  ROOT_LOCATION, ANALYTICS_LOCATION, TRANSACTIONS_LOCATION, CATEGORIES_LOCATION, ACCOUNTS_LOCATION,
} from '../utils/constants';
import MessageContainer from '../containers/MessageContainer';
import ModalRootContainer from '../containers/modals/ModalRootContainer';

const routes = (
  <>
    <LayoutContainer>
      <Redirect from={ROOT_LOCATION} to={ANALYTICS_LOCATION} />
      <Route path={ANALYTICS_LOCATION} component={AnalyticsPageContainer} />
      <Route path={TRANSACTIONS_LOCATION} component={TransactionsPageContainer} />
      <Route path={CATEGORIES_LOCATION} component={CategoriesPageContainer} />
      <Route path={ACCOUNTS_LOCATION} component={AccountsPageContainer} />
      <MessageContainer />
      <ModalRootContainer />
    </LayoutContainer>
  </>
);

export default routes;
