import { MONTH_NAME } from './constants';

export const compareDates = (dateA, dateB) => new Date(dateA.setHours(0, 0, 0, 0)).getTime() === new Date(dateB.setHours(0, 0, 0, 0)).getTime();

export const dateParser = (date) => {
  const dateToParse = new Date(date);
  if (compareDates(dateToParse, new Date())) {
    return 'Сегодня';
  }
  if (compareDates(new Date(dateToParse.setDate(dateToParse.getDate() - 1)), new Date())) {
    return 'Вчера';
  }
  return `${dateToParse.getDate()} ${MONTH_NAME[dateToParse.getMonth()].substr(0, 3)}`;
};
