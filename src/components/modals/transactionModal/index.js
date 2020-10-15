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
    const { defaultTransaction } = this.props;
    this.state = {
      selectedType: defaultTransaction.type ? defaultTransaction.type : TRANSACTION_TYPES.CREDIT,
      selectedCategoryId: defaultTransaction.category ? defaultTransaction.category.id : null,
      selectedAccountId: defaultTransaction.account ? defaultTransaction.account.id : null,
      selectedDate: defaultTransaction.date ? defaultTransaction.date : new Date(),
      sumValue: defaultTransaction.sum ? `${defaultTransaction.sum}` : null,
    };
  }

  handleChangeValue = (event) => {
    const { value } = event.target;
    return this.setState({ selectedType: value });
  }

  handleCategoryDropdownClicked = (value) => this.setState({ selectedCategoryId: value.id })

  handleAccountDropdownClicked = (value) => this.setState({ selectedAccountId: value.id })

  handleSumValueChanged = (value) => this.setState({ sumValue: value })

  handleDateSelected = (value) => this.setState({ selectedDate: value })

  handleSubmitButtonClicked = () => {
    const { saveTransaction, hideModal, defaultTransaction } = this.props;
    const {
      selectedDate, sumValue, selectedCategoryId, selectedAccountId, selectedType,
    } = this.state;

    const categoryId = selectedType === TRANSACTION_TYPES.DEBIT ? null : selectedCategoryId;

    saveTransaction({
      ...defaultTransaction,
      type: selectedType,
      date: selectedDate,
      sum: sumValue.replace(/[^\d]/g, ''),
      category: categoryId,
      account: selectedAccountId,
    });

    hideModal();
  }

  handleCloseModal = () => {
    const { hideModal } = this.props;
    hideModal();
  }

  render() {
    const { categories, accounts } = this.props;
    const {
      selectedType, selectedCategoryId, selectedAccountId, sumValue, selectedDate,
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
      <Modal
        close={this.handleCloseModal}
        header={
          <Tabs tabs={tabs} checkedValue={selectedType} changed={this.handleChangeValue} />
                  }
        body={(
          <>
            <FormItem fieldName="Сумма">
              <PromoInput transactionType={selectedType} defaultValue={sumValue} changed={this.handleSumValueChanged} />
            </FormItem>
            {selectedType === TRANSACTION_TYPES.CREDIT && (
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
    );
  }
}

TransactionModal.propTypes = {
  hideModal: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(CategoryType).isRequired,
  accounts: PropTypes.arrayOf(AccountType).isRequired,
  saveTransaction: PropTypes.func.isRequired,
  defaultTransaction: TransactionType,
};

TransactionModal.defaultProps = {
  defaultTransaction: null,
};
