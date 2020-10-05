import React from 'react';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import PropTypes from 'prop-types';
import Input from './index';
import { TRANSACTION_TYPES, CURRENCY } from '../../../utils/constants';

const PromoInput = ({ transactionType, changed }) => {
  const prefix = transactionType === TRANSACTION_TYPES.DEBIT ? '+' : '-';

  const defaultMaskOptions = {
    prefix: prefix,
    suffix: ` ${CURRENCY}`,
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ' ',
    allowDecimal: true,
    decimalSymbol: ',',
    decimalLimit: 2, // how many digits allowed after the decimal
    integerLimit: 7, // limit length of integer numbers
    allowNegative: false,
    allowLeadingZeroes: false,
  };

  const currencyMask = createNumberMask({
    ...defaultMaskOptions,
  });

  return (
    <div className="promo-input">
      <Input maskOptions={currencyMask} placeholder={`${prefix} ${CURRENCY}`} changed={changed} />
    </div>
  );
};

PromoInput.propTypes = {
  transactionType: PropTypes.oneOf(TRANSACTION_TYPES),
  changed: PropTypes.func.isRequired,
};

PromoInput.defaultProps = {
  transactionType: TRANSACTION_TYPES.DEBIT,
};

export default PromoInput;
