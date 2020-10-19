import React, { Component } from 'react';
import { DateTime } from 'luxon';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import { createAutoCorrectedDatePipe } from 'text-mask-addons';
import sprite from '../../../assets/sprite.svg';
import { dateFormatter, formatStringToDateTime } from '../../../utils/dateUtils';
import { MONTH_NAME, WEEKDAY_NAME } from '../../../utils/constants';

const VISIBLE_AMOUNT_OF_DAYS = 42;

const MonthDay = ({
  children, clicked, isNotVisibleMonth, isSelected,
}) => (
  <div
    onClick={clicked}
    className={`datepicker__day ${isNotVisibleMonth ? 'datepicker__day_pale' : ''} ${isSelected ? 'datepicker__day_selected' : ''}`}
  >
    {children}
  </div>
);

MonthDay.propTypes = {
  children: PropTypes.node.isRequired,
  clicked: PropTypes.func.isRequired,
  isNotVisibleMonth: PropTypes.bool,
  isSelected: PropTypes.bool,
};

MonthDay.defaultProps = {
  isNotVisibleMonth: false,
  isSelected: false,
};

export default class DatePicker extends Component {
  constructor(props) {
    super(props);
    const { defaultDate } = this.props;
    this.inputRef = React.createRef();
    this.state = {
      isOpen: false,
      visibleDate: defaultDate
        ? DateTime.fromJSDate(new Date(defaultDate.setHours(0, 0, 0, 0)))
        : DateTime.fromJSDate(new Date(new Date().setHours(0, 0, 0, 0))),
    };
  }

    handleHeaderButtonClick = () => {
      this.inputRef.inputElement.focus();
      this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
    };

    handleDayMonthClicked = (selectedDate) => {
      const { selected } = this.props;
      this.setState({ visibleDate: selectedDate, isOpen: false });
      selected(new Date(selectedDate.toString()));
    };

    handleButtonBackClicked = () => {
      this.setState((prevState) => ({ visibleDate: prevState.visibleDate.minus({ months: 1 }) }));
    };

    handleButtonForwardClicked = () => {
      this.setState((prevState) => ({ visibleDate: prevState.visibleDate.plus({ months: 1 }) }));
    };

    handleDatePickerInputChange = (value) => {
      const { selected } = this.props;
      const date = formatStringToDateTime(value);
      if (!date) {
        return;
      }
      this.setState({ visibleDate: date, isOpen: false });
      selected(new Date(date.toString()));
    }

    render() {
      const { visibleDate, isOpen } = this.state;
      const amountOfDays = visibleDate.daysInMonth;
      const startDayOfMonth = DateTime.local(visibleDate.year, visibleDate.month, 1).weekday;
      const dayOffset = startDayOfMonth - 1; // 3

      const monthDays = [];

      for (let i = 0; i < VISIBLE_AMOUNT_OF_DAYS; i += 1) {
        if (i < dayOffset) {
          monthDays.push({
            date: DateTime.local(visibleDate.year, visibleDate.month, 1).minus({ days: dayOffset - i }),
            isNotVisibleMonth: true,
          });
        } else if (i >= dayOffset && i < amountOfDays + dayOffset) {
          monthDays.push({
            date: DateTime.local(visibleDate.year, visibleDate.month, i - dayOffset + 1),
            isNotVisibleMonth: false,
          });
        } else {
          monthDays.push({
            date: DateTime.local(visibleDate.year, visibleDate.month, amountOfDays).plus({ days: i - amountOfDays - dayOffset + 1 }),
            isNotVisibleMonth: true,
          });
        }
      }

      const autoCorrectedDatePipe = createAutoCorrectedDatePipe('dd.mm.yyyy');

      return (
        <div className="datepicker__wrapper">
          <div className="icon-input">
            <MaskedInput
              className="input"
              type="text"
              pipe={autoCorrectedDatePipe}
              mask={[/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/]}
              keepCharPositions
              guide
              ref={(input) => { this.inputRef = input; }}
              value={dateFormatter(visibleDate)}
              onChange={(e) => this.handleDatePickerInputChange(e.target.value)}
            />
            <div className="icon-input__button" onClick={() => this.handleHeaderButtonClick()}>
              <svg className="icon-input__icon"><use xlinkHref={`${sprite}#Calendar`} /></svg>
            </div>
          </div>
          <div className={`datepicker__container ${isOpen ? 'datepicker__container_open' : ''}`}>
            <div className="datepicker__calendar-menu">
              <div className="datepicker__calendar-label">
                {MONTH_NAME[`${visibleDate.month}`]}
                {' '}
                {visibleDate.year}
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
              {monthDays.map((monthDay) => (
                <MonthDay
                  key={`${monthDay.date.day}.${monthDay.date.month}`}
                  isNotVisibleMonth={monthDay.isNotVisibleMonth}
                  clicked={() => this.handleDayMonthClicked(monthDay.date)}
                  isSelected={+visibleDate === +monthDay.date}
                >
                  {monthDay.date.day}
                </MonthDay>
              ))}
            </div>
            <div className="datepicker__bottom-menu">
              <div
                className={`datepicker__shortcut footnote-medium ${+visibleDate === +visibleDate.minus({ days: 1 }) ? 'datepicker__shortcut_disabled' : ''}`}
                onClick={() => this.handleDayMonthClicked(visibleDate.minus({ days: 1 }))}
              >
                вчера
              </div>
              <div
                className={`datepicker__shortcut footnote-medium ${+visibleDate === +DateTime.fromJSDate(new Date(new Date().setHours(0, 0, 0, 0))) ? 'datepicker__shortcut_disabled' : ''}`}
                onClick={() => this.handleDayMonthClicked(DateTime.fromJSDate(new Date(new Date().setHours(0, 0, 0, 0))))}
              >
                сегодня
              </div>
              <div
                className={`datepicker__shortcut footnote-medium ${visibleDate.equals(visibleDate.plus({ days: 1 }))
                  ? 'datepicker__shortcut_disabled'
                  : ''}`}
                onClick={() => this.handleDayMonthClicked(visibleDate.plus({ days: 1 }))}
              >
                завтра
              </div>
            </div>
          </div>
        </div>
      );
    }
}

DatePicker.propTypes = {
  defaultDate: PropTypes.instanceOf(Date),
  selected: PropTypes.func.isRequired,
};

DatePicker.defaultProps = {
  defaultDate: null,
};
