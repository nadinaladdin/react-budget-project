import React from 'react';
import './App.scss';
import { ConnectedRouter } from 'connected-react-router';
import PropTypes from 'prop-types';
import routes from './routes';

const App = ({ history }) => (
  <ConnectedRouter history={history}>
    { routes }
  </ConnectedRouter>
);

App.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
};

export default App;
