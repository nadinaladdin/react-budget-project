/* eslint-disable import/prefer-default-export */
export const moneyStringFormatter = (sum) => {
  if (!sum) return null;
  const strSum = String(Number.isInteger(Number(sum)) ? sum : Number(sum).toFixed(2));
  const thouSeparator = String(sum).length > 3 ? strSum.length % 3 : 0;
  return `${strSum.substr(0, thouSeparator)} ${strSum.substr(thouSeparator).replace(/(\d{3})/g, '$1 ')} ₽`.replace(' .', ',');
};

export const firstLetterUppercaseFormatter = (str) => `${str.charAt(0).toUpperCase()}${str.substring(1)}`;
