import React, { Component } from 'react';
import PropTypes from 'prop-types';
import sprite from '../../../assets/sprite.svg';
import Input from './index';

const MONTH_NAME = {
  0: 'Январь',
  1: 'Февраль',
  2: 'Март',
  3: 'Апрель',
  4: 'Май',
  5: 'Июнь',
  6: 'Июль',
  7: 'Август',
  8: 'Сентябрь',
  9: 'Октябрь',
  10: 'Ноябрь',
  11: 'Декабрь',
};

const WEEKDAY_NAME = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

const VISIBLE_AMOUNT_OF_DAYS = 42;

const MonthDay = ({
  children, clicked, isNotVisibleMonth = false, isSelected = false,
}) => (
  <div onClick={clicked} className={`datepicker__day ${isNotVisibleMonth ? 'datepicker__day_pale' : ''} ${isSelected ? 'datepicker__day_selected' : ''}`}>
    {children}
  </div>
);

export default class DatePicker extends Component {
  constructor(props) {
    super(props);
    const { selectedDate } = this.props;
    this.state = {
      isOpen: false,
      currentDate: new Date(2020, 2, 1),
      visibleDate: selectedDate || new Date(new Date().setHours(0, 0, 0, 0)),
    };
  }

    getParsedDate = (date) => ({
      year: date.getFullYear(),
      month: date.getMonth(),
      weekDay: date.getDay(),
      day: date.getDate(),
    });

    handleHeaderButtonClick = () => {
      this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
    };

    getAmountOfDays = (year, month) => new Date(year, month + 1, 0).getDate();

    getStartDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

    handleDayMonthClicked = (selectedDate) => {
      console.log(selectedDate);
      this.setState({ visibleDate: selectedDate });
    };

    handleButtonBackClicked = () => {
      this.setState((prevState) => ({ visibleDate: new Date(prevState.visibleDate.setMonth(prevState.visibleDate.getMonth() - 1)) }));
    };

    handleButtonForwardClicked = () => {
      this.setState((prevState) => ({ visibleDate: new Date(prevState.visibleDate.setMonth(prevState.visibleDate.getMonth() + 1)) }));
    };

    render() {
      const { defaultValue } = this.props;
      const { currentDate, visibleDate } = this.state;
      const parsedDate = this.getParsedDate(visibleDate || currentDate);
      const amountOfDays = this.getAmountOfDays(parsedDate.year, parsedDate.month);
      const startDayOfMonth = this.getStartDayOfMonth(parsedDate.year, parsedDate.month);
      const previousMonthAmountOfDays = this.getAmountOfDays(parsedDate.year, parsedDate.month - 1);
      const dayOffset = startDayOfMonth === 0 ? 6 : startDayOfMonth - 1;

      const monthDays = [];

      for (let i = 0; i < VISIBLE_AMOUNT_OF_DAYS; i++) {
        const date = new Date(visibleDate || currentDate);
        if (i < dayOffset) {
          monthDays.push({
            date: new Date(date.setMonth(date.getMonth() - 1, previousMonthAmountOfDays - dayOffset + i + 1)),
            isNotVisibleMonth: true,
          });
          continue;
        }
        if (i >= dayOffset && i < amountOfDays + dayOffset) {
          monthDays.push({
            date: new Date(date.setDate(i - dayOffset + 1)),
            isNotVisibleMonth: false,
          });
          continue;
        }
        monthDays.push({
          date: new Date(date.setMonth(date.getMonth() + 1, i - dayOffset - amountOfDays + 1)),
          isNotVisibleMonth: true,
        });
      }

      return (
        <div className="datepicker__wrapper">
          <div className="icon-input">
            <Input defaultValue={defaultValue} />
            <div className="icon-input__button" onClick={() => this.handleHeaderButtonClick()}>
              <svg className="icon-input__icon"><use xlinkHref={`${sprite}#Calendar`} /></svg>
            </div>
          </div>
          <div className={`datepicker__container ${this.state.isOpen ? 'datepicker__container_open' : ''}`}>
            <div className="datepicker__calendar-menu">
              <div className="datepicker__calendar-label">
                {MONTH_NAME[`${parsedDate.month}`]}
                {' '}
                {parsedDate.year}
              </div>
              <div className="datepicker__calendar-controls">
                <div className="datepicker__calendar-control" onClick={() => this.handleButtonBackClicked()}>
                  <svg className="datepicker__icon datepicker__icon_back"><use xlinkHref={`${sprite}#ChevronDown`} /></svg>
                </div>
                <div className="datepicker__calendar-control" onClick={() => this.handleButtonForwardClicked()}>
                  <svg className="datepicker__icon datepicker__icon_forward"><use xlinkHref={`${sprite}#ChevronDown`} /></svg>
                </div>
              </div>
            </div>
            <div className="datepicker__week">
              {WEEKDAY_NAME.map((weekDay) => (<div key={weekDay} className="datepicker__weekday">{weekDay}</div>))}
            </div>
            <div className="datepicker__calendar">
              {monthDays.map((day) => (
                <MonthDay
                  key={day}
                  isNotVisibleMonth={day.isNotVisibleMonth}
                  clicked={() => this.handleDayMonthClicked(day.date)}
                  isSelected={visibleDate.getTime() === day.date.getTime()}
                >
                  {day.date.getDate()}
                </MonthDay>
              ))}
            </div>
            <div className="datepicker__bottom-menu">
              <div className={`datepicker__shortcut footnote-medium ${new Date(new Date(new Date().setDate(new Date().getDate() - 1)).setHours(0, 0, 0, 0)).getTime() === visibleDate.getTime() ? 'datepicker__shortcut_disabled' : ''}`}>
                вчера
              </div>
              <div className={`datepicker__shortcut footnote-medium ${new Date(new Date().setHours(0, 0, 0, 0)).getTime() === visibleDate.getTime() ? 'datepicker__shortcut_disabled' : ''}`}>
                сегодня
              </div>
              <div className={`datepicker__shortcut footnote-medium ${new Date(new Date(new Date().setDate(new Date().getDate() + 1)).setHours(0, 0, 0, 0)).getTime() === visibleDate.getTime() ? 'datepicker__shortcut_disabled' : ''}`}>
                завтра
              </div>
            </div>
          </div>
        </div>
      );
    }
}
