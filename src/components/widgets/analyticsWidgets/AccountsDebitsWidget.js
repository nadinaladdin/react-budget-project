import React, { Component } from 'react';
import { MONTH_NAME } from '../../../utils/constants';
import sprite from '../../../assets/sprite.svg';
import { OverflowMenu, OverflowMenuItem } from '../../shared/overflowMenu';
import AccountDebitsTable from './AccountDebitsTable';

export default class AccountsDebitsWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMonth: new Date().getMonth(),
    };
  }

  render() {
    const { selectedMonth } = this.state;
    return (
      <div className="card">
        <div className="card__header">
          <div className="card__title">
            Баланс счетов
          </div>
          <div className="card__controls">
            <OverflowMenu title={MONTH_NAME[selectedMonth]} customIcon={<use xlinkHref={`${sprite}#Calendar`} />}>
              <OverflowMenuItem title="Март" />
              <OverflowMenuItem title="Апрель" />
              <OverflowMenuItem title="Май" />
            </OverflowMenu>
          </div>
        </div>
        <div className="card__divider" />
        <div className="card__body">
          <AccountDebitsTable />
          <div className="divider-gap-xs" />
          <AccountDebitsTable />
          <div className="divider-gap-xs" />
        </div>
      </div>
    );
  }
}
