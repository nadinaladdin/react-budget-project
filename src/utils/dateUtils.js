import { DateTime } from 'luxon';
import { MONTH_NAME } from './constants';

export const compareDates = (dateA, dateB) => new Date(dateA.setHours(0, 0, 0, 0)).getTime() === new Date(dateB.setHours(0, 0, 0, 0)).getTime();

export const getMonthName = (monthNum) => MONTH_NAME[monthNum];

export const dateParser = (date) => {
  const dateToParse = new Date(date);
  const comparedDate = new Date();
  if (compareDates(dateToParse, comparedDate)) {
    return 'Сегодня';
  }
  if (compareDates(dateToParse, new Date(comparedDate.setDate(dateToParse.getDate() - 1)))) {
    return 'Вчера';
  }
  return `${dateToParse.getDate()} ${getMonthName(dateToParse.getMonth()).substr(0, 3)}`;
};

export const dateFormatter = (date) => date.toFormat('dd.MM.yyyy');

export const formatStringToDateTime = (str) => {
  const parts = str.replaceAll('_', '').split('.');
  if (parts.length !== 3 || parts[2].length < 4) {
    return null;
  }
  return DateTime.fromISO(`${parts[2]}-${parts[1]}-${parts[0]}`);
};
