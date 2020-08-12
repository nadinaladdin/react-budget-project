/* eslint-disable react/jsx-indent */
import React from 'react';

import { action } from '@storybook/addon-actions';
import Button, { BUTTON_SIZE, BUTTON_TYPE } from '../../src/components/shared/button';
import '../../src/styles/main.scss';
import FloatingButton from '../../src/components/shared/button/FloatingButton';
import { OverflowMenu, OverflowMenuItem } from '../../src/components/shared/overflowMenu';

export default {
  title: 'Buttons',
};

const buttonProps = {
  small: {
    size: BUTTON_SIZE.small,
  },
  medium: {
    size: BUTTON_SIZE.medium,
  },
  large: {
    size: BUTTON_SIZE.large,
  },
  primary: {
    type: BUTTON_TYPE.primary,
  },
  secondary: {
    type: BUTTON_TYPE.secondary,
  },
  outline: {
    type: BUTTON_TYPE.outline,
  },
  danger: {
    isDanger: true,
  },
  disabled: {
    isDisabled: true,
  },
};

export const ButtonsStory = () => (
  <div className="story">
    <div className="story__title">
      <h1 className="primary-header">
        Controls
      </h1>
    </div>
    <div className="story__subtitle">
      <h3 className="tertiary-header">
        Small buttons
      </h3>
    </div>
    <div className="component-container">
      <div className="component-container__row">
        <Button {...buttonProps.small} {...buttonProps.primary}>Small Primary</Button>
        <Button {...buttonProps.small} {...buttonProps.secondary}>Small Secondary</Button>
        <Button {...buttonProps.small} {...buttonProps.outline}>Small Outline</Button>
        <Button {...buttonProps.small} {...buttonProps.primary} {...buttonProps.danger}>Small Primary Danger</Button>
        <Button {...buttonProps.small} {...buttonProps.outline} {...buttonProps.danger}>Small Outline Danger</Button>
        <Button {...buttonProps.small} {...buttonProps.primary} {...buttonProps.disabled}>Small Disabled</Button>
      </div>
    </div>
    <div className="story__subtitle">
      <h3 className="tertiary-header">
        Medium buttons
      </h3>
    </div>
    <div className="component-container">
      <div className="component-container__row">
        <Button {...buttonProps.medium} {...buttonProps.primary}>Medium Primary</Button>
        <Button {...buttonProps.medium} {...buttonProps.secondary}>Medium Secondary</Button>
        <Button {...buttonProps.medium} {...buttonProps.outline}>Medium Outline</Button>
        <Button {...buttonProps.medium} {...buttonProps.primary} {...buttonProps.danger}>Medium Primary Danger</Button>
        <Button {...buttonProps.medium} {...buttonProps.outline} {...buttonProps.danger}>Medium Outline Danger</Button>
        <Button {...buttonProps.medium} {...buttonProps.primary} {...buttonProps.disabled}>Medium Disabled</Button>
      </div>
    </div>
    <div className="story__subtitle">
      <h3 className="tertiary-header">
        Floating button
      </h3>
    </div>
    <div className="component-container">
      <div className="component-container__row">
        <FloatingButton />
      </div>
    </div>
    <div className="story__subtitle">
      <h3 className="tertiary-header">
        Overflow menu
      </h3>
    </div>
    <div className="component-container" style={{ height: '300px' }}>
      <div className="component-container__row">
        <OverflowMenu>
            <OverflowMenuItem title="Пополнить" />
          <OverflowMenuItem title="Редактировать" />
          <OverflowMenuItem title="Удалить" isDanger />
        </OverflowMenu>
      </div>
    </div>
  </div>
);

export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
