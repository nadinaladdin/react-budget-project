import { DateTime } from 'luxon';
import { MONTH_NAME } from './constants';

export const getMonthName = (monthNum) => MONTH_NAME[monthNum];

export const dateParser = (dateToParse) => {
  const date = DateTime.fromJSDate(new Date(new Date(dateToParse).setHours(0, 0, 0, 0)));
  const dateToCompare = DateTime.fromJSDate(new Date(new Date().setHours(0, 0, 0, 0)));
  if (+date === +dateToCompare) {
    return 'Сегодня';
  }
  if (+date === +dateToCompare.minus({ days: 1 })) {
    return 'Вчера';
  }
  return `${date.day} ${getMonthName(date.month).substr(0, 3)}`;
};

export const dateFormatter = (date) => date.toFormat('dd.MM.yyyy');

export const formatStringToDateTime = (str) => {
  const parts = str.replaceAll('_', '').split('.');
  if (parts.length !== 3 || parts[2].length < 4) {
    return null;
  }
  return DateTime.fromISO(`${parts[2]}-${parts[1]}-${parts[0]}`);
};
