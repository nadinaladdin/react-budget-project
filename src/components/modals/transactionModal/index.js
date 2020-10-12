import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from '../../shared/modal';
import Tabs from '../../shared/tabs';
import PromoInput from '../../shared/input/PromoInput';
import FormItem from '../../shared/form/FormItem';
import Dropdown from '../../shared/dropdown/index';
import { TRANSACTION_TYPES } from '../../../utils/constants';
import { CategoryType, AccountType, TransactionType } from '../../propTypes';
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
    const { transactionToUpdate } = this.props;
    this.state = {
      checkedValue: transactionToUpdate ? transactionToUpdate.type : TRANSACTION_TYPES.DEBIT,
      selectedCategoryId: transactionToUpdate ? transactionToUpdate.category : null,
      selectedAccountId: transactionToUpdate ? transactionToUpdate.account : null,
      selectedDate: transactionToUpdate ? transactionToUpdate.date : new Date(),
      sumValue: transactionToUpdate ? transactionToUpdate.sum : null,
    };
  }

  handleChangeValue = (event) => {
    const { value } = event.target;
    return this.setState({ checkedValue: value });
  }

  handleCategoryDropdownClicked = (value) => this.setState({ selectedCategoryId: value.id })

  handleAccountDropdownClicked = (value) => this.setState({ selectedAccountId: value.id })

  handleSumValueChanged = (value) => this.setState({ sumValue: value })

  handleDateSelected = (value) => this.setState({ selectedDate: value })

  handleSubmitButtonClicked = () => {
    const { createTransaction, close } = this.props;
    const {
      selectedDate, sumValue, selectedCategoryId, selectedAccountId, checkedValue,
    } = this.state;

    createTransaction({
      type: checkedValue,
      date: selectedDate,
      sum: sumValue.replace(/[^\d]/g, ''),
      category: selectedCategoryId,
      account: selectedAccountId,
    });

    close();
  }

  render() {
    const {
      isOpen, close, categories, accounts,
    } = this.props;
    const {
      checkedValue, selectedCategoryId, selectedAccountId, sumValue, selectedDate,
    } = this.state;
    const categoryItems = categories.map((category) => ({
      id: category.id,
      title: category.name,
      colour: category.colour,
    }));
    const accountItems = accounts.map((account) => ({
      id: account.id,
      title: account.name,
      colour: null,
    }));

    const defaultCategoryItem = selectedCategoryId ? categoryItems.find((item) => item.id === selectedCategoryId) : null;
    const defaultAccountItem = selectedAccountId ? accountItems.find((item) => item.id === selectedAccountId) : null;

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
                <PromoInput transactionType={checkedValue} defaultValue={sumValue} changed={this.handleSumValueChanged} />
              </FormItem>
              {checkedValue === TRANSACTION_TYPES.CREDIT && (
              <FormItem fieldName="Категория">
                <Dropdown items={categoryItems} defaultSelectedItem={defaultCategoryItem} clicked={this.handleCategoryDropdownClicked} />
              </FormItem>
              ) }
              <FormRow>
                <FormItem fieldName="Счет">
                  <Dropdown items={accountItems} defaultSelectedItem={defaultAccountItem} clicked={this.handleAccountDropdownClicked} />
                </FormItem>
                <FormItem fieldName="Дата">
                  <DatePicker selectedDate={selectedDate} selected={this.handleDateSelected} />
                </FormItem>
              </FormRow>
            </>
          )}
          controls={
            <Button type="primary" size="medium" clicked={this.handleSubmitButtonClicked}>Записать</Button>
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
  createTransaction: PropTypes.func.isRequired,
  transactionToUpdate: TransactionType,
};

TransactionModal.defaultProps = {
  transactionToUpdate: null,
};
