import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from '../../shared/modal';
import Tabs from '../../shared/tabs';
import PromoInput from '../../shared/input/PromoInput';
import FormItem from '../../shared/form/FormItem';
import Dropdown from '../../shared/dropdown/index';
import { TRANSACTION_TYPES } from '../../../utils/constants';
import { CategoryType, AccountType } from '../../propTypes';
import FormRow from '../../shared/form/formRow';
import DatePicker from '../../shared/input/DatePicker';
import Button from '../../shared/button';

const tabs = [
  { name: 'Трата', value: TRANSACTION_TYPES.CREDIT },
  { name: 'Пополнение', value: TRANSACTION_TYPES.DEBIT },
];

export default class TransactionModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedValue: TRANSACTION_TYPES.DEBIT,
      selectedCategoryItem: null,
      selectedAccountItem: null,
    };
  }

  handleChangeValue = (event) => {
    const { value } = event.target;
    return this.setState({ checkedValue: value });
  }

  handleCategoryDropdownClicked = (event) => {
    const { value } = event.target;
    return this.setState({ selectedCategoryItem: value });
  }

  handleAccountDropdownClicked = (event) => {
    const { value } = event.target;
    return this.setState({ selectedAccountItem: value });
  }

  render() {
    const {
      isOpen, close, categories, accounts,
    } = this.props;
    const { checkedValue, selectedCategoryItem, selectedAccountItem } = this.state;
    const categoryItems = categories.map((category) => ({
      title: category.name,
      colour: category.colour,
    }));
    const accountItems = accounts.map((account) => ({
      title: account.name,
      colour: null,
    }));
    return (
      isOpen && (
        <Modal
          close={close}
          header={
            <Tabs tabs={tabs} checkedValue={checkedValue} changed={this.handleChangeValue} />
                  }
          body={(
            <>
              <FormItem fieldName="Сумма">
                <PromoInput transactionType={checkedValue} />
              </FormItem>
              {checkedValue === TRANSACTION_TYPES.CREDIT && (
              <FormItem fieldName="Категория">
                <Dropdown items={categoryItems} selectedItem={selectedCategoryItem} clicked={this.handleCategoryDropdownClicked} />
              </FormItem>
              ) }
              <FormRow>
                <FormItem fieldName="Счет">
                  <Dropdown items={accountItems} selectedItem={selectedAccountItem} clicked={this.handleAccountDropdownClicked} />
                </FormItem>
                <FormItem fieldName="Дата">
                  <DatePicker />
                </FormItem>
              </FormRow>
            </>
          )}
          controls={
            <Button type="primary" size="medium">Записать</Button>
          }
        />
      )
    );
  }
}

TransactionModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(CategoryType).isRequired,
  accounts: PropTypes.arrayOf(AccountType).isRequired,
};
