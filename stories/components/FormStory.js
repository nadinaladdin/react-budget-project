import React from 'react';

import { action } from '@storybook/addon-actions';
import '../../src/styles/main.scss';
import FormItem, { MESSAGE } from '../../src/components/shared/form/FormItem';
import PromoInput from '../../src/components/shared/input/PromoInput';
import Input from '../../src/components/shared/input';
import SearchInput from '../../src/components/shared/input/SearchInput';
import Dropdown from '../../src/components/shared/dropdown';
import DatePicker from '../../src/components/shared/input/DatePicker';
import Tabs from '../../src/components/shared/tabs';

export default {
  title: 'Form',
};

const items = [
  { title: 'Продукты', colour: 'red' },
  { title: 'Автомобиль', colour: 'violet' },
  { title: 'Книги', colour: 'yellow' },
  { title: 'Интернет', colour: 'gray' },
  { title: 'Косметика', colour: 'green' },
  { title: 'Развлечения', colour: 'blue' },
];

export const FormStory = () => (
  <div className="story">
    <div className="story__title">
      <h1 className="primary-header">
        Forms
      </h1>
    </div>
    <div className="story__subtitle">
      <h3 className="tertiary-header">
        Field
      </h3>
    </div>
    <div className="component-container">
      <div className="component-container__row">
        <div className="width-30">
          <FormItem fieldName="Телефон" message="Цифры и знак «+»" messageType={MESSAGE.hint}>
            <Input placeholder="+ 7 ••• ••• •• ••" />
          </FormItem>
        </div>
        <div className="width-30">
          <FormItem fieldName="Телефон" message="Это не похоже на телефон" messageType={MESSAGE.error}>
            <Input defaultValue="+7 🐰🐰🐰 🐰🐰🐰 🐰🐰 🐰🐰" />
          </FormItem>
        </div>
      </div>
      <div className="component-container__row">
        <div className="width-30">
          <FormItem fieldName="Имя и фамилия" message="Имя свободно" messageType={MESSAGE.hint}>
            <SearchInput defaultValue="Как же я люблю BTS, вот они слева направо: Намджун, Чонгук, Чингачгук, Гойко Митич, Джин, Юнги Люблю вас❤❤❤" />
          </FormItem>
        </div>
      </div>
      <div className="component-container__row">
        <div className="width-50">
          <FormItem fieldName="Сумма">
            <PromoInput />
          </FormItem>
        </div>
      </div>
    </div>
    <div className="story__subtitle">
      <h3 className="tertiary-header">
        Dropdown
      </h3>
    </div>
    <div className="component-container">
      <div className="component-container__row">
        <div className="width-30">
          <FormItem fieldName="Категория">
            <Dropdown items={items} defaultSelectedItem={items[0]} />
          </FormItem>
        </div>
      </div>
    </div>
    <div className="story__subtitle">
      <h3 className="tertiary-header">
        Datepicker
      </h3>
    </div>
    <div className="component-container">
      <div className="component-container__row">
        <FormItem fieldName="Дата">
          <DatePicker defaultValue="Сегодня, 4 фев" />
        </FormItem>
      </div>
    </div>
    <div className="story__subtitle">
      <h3 className="tertiary-header">
        Tabs
      </h3>
    </div>
    <div className="component-container">
      <div className="component-container__row">
        <Tabs tabs={[{ name: 'Оброк' }, { name: 'Барщина' }, { name: 'Десятина' }]} />
      </div>
    </div>
  </div>
);
