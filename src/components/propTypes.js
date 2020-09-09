import PropTypes from 'prop-types';
import { TRANSACTION_TYPES } from '../utils/constants';

export const CategoryType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  colour: PropTypes.string.isRequired,
});

export const AccountType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  sum: PropTypes.number.isRequired,
});

export const TransactionType = PropTypes.shape({
  date: PropTypes.instanceOf(Date).isRequired,
  sum: PropTypes.number.isRequired,
  type: PropTypes.oneOf(TRANSACTION_TYPES).isRequired,
  category: PropTypes.string.isRequired,
  account: PropTypes.string.isRequired,
});

export const DropdownItemsType = PropTypes.shape({
  title: PropTypes.string,
  colour: PropTypes.string,
});

export const MaskOptionsType = PropTypes.shape({
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  includeThousandsSeparator: PropTypes.boolean,
  thousandsSeparatorSymbol: PropTypes.string,
  allowDecimal: PropTypes.boolean,
  decimalSymbol: PropTypes.string,
  decimalLimit: PropTypes.string,
  requireDecimal: PropTypes.boolean,
  allowNegative: PropTypes.boolean,
  allowLeadingZeroes: PropTypes.boolean,
  integerLimit: PropTypes.number,
});

export const TabType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
});
