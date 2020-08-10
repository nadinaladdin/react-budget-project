import PropTypes from 'prop-types';

export const CategoryType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  colour: PropTypes.string.isRequired,
});

export const AccountType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  sum: PropTypes.number.isRequired,
});

export const DropdownItemsType = PropTypes.shape({
  title: PropTypes.string,
  colour: PropTypes.string,
});
