import React from 'react';
import PropTypes from 'prop-types';
import { moneyStringFormatter } from '../../../utils/stringUtils';

const BalanceWidget = ({ balance }) => (
  <div className="card">
    <div className="card__header">
      <div className="card__title">
        Баланс
      </div>
    </div>
    <div className="card__body">
      <h1 className="primary-header text-promo">{moneyStringFormatter(balance)}</h1>
    </div>
  </div>
);

BalanceWidget.propTypes = {
  balance: PropTypes.number.isRequired,
};

export default BalanceWidget;
