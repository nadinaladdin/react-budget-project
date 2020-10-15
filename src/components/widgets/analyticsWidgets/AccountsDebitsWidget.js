import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';
import { MONTH_NAME } from '../../../utils/constants';
import sprite from '../../../assets/sprite.svg';
import { OverflowMenu, OverflowMenuItem } from '../../shared/overflowMenu';
import AccountDebitsTable from './AccountDebitsTable';

const VISIBLE_AMOUNT_OF_MONTHS = 3;

export default class AccountsDebitsWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMonth: DateTime.local().month,
    };
  }

  render() {
    const { selectedMonth } = this.state;
    const { changeMonth } = this.props;
    const overflowMenuItems = [];

    for (let i = 0; i < VISIBLE_AMOUNT_OF_MONTHS; i += 1) {
      const { month } = DateTime.local().minus({ months: i + 1 });
      overflowMenuItems.push(<OverflowMenuItem title={MONTH_NAME[month]} key={MONTH_NAME[month]} clicked={() => changeMonth(month)} />);
    }
    return (
      <div className="card">
        <div className="card__header">
          <div className="card__title">
            Баланс счетов
          </div>
          <div className="card__controls">
            <OverflowMenu title={MONTH_NAME[selectedMonth]} customIcon={<use xlinkHref={`${sprite}#Calendar`} />}>
              {overflowMenuItems}
            </OverflowMenu>
          </div>
        </div>
        <div className="card__divider" />
        <div className="card__body">
          <AccountDebitsTable />
          <div className="accounts-debits-divider" />
          <AccountDebitsTable />
          <div className="accounts-debits-divider" />
        </div>
      </div>
    );
  }
}

AccountsDebitsWidget.propTypes = {
  changeMonth: PropTypes.func.isRequired,
};
