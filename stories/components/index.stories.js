import React from 'react';
import { linkTo } from '@storybook/addon-links';
import {ButtonsStory} from "./ButtonsStory";
import {FormStory} from "./FormStory";
import {NotificationsStory} from "./NotificationStory";

export default {
  title: 'Components',
};

export const Buttons = () => <ButtonsStory/>;

export const Form = () => <FormStory/>;

export const Notifications = () => <NotificationsStory/>
