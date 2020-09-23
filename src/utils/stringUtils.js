/* eslint-disable import/prefer-default-export */
export const moneyStringFormatter = (sum) => {
  const strSum = String(Number.isInteger(sum) ? sum : sum.toFixed(2));
  const thouSeparator = String(sum).length > 3 ? strSum.length % 3 : 0;
  return `${strSum.substr(0, thouSeparator)} ${strSum.substr(thouSeparator).replace(/(\d{3})/g, '$1 ')} ₽`.replace(' .', ',');
};
