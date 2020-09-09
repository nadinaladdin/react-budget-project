import React from 'react';
import '../../src/styles/main.scss';
import Banner from '../../src/components/shared/banner';
import Button, { BUTTON_SIZE, BUTTON_TYPE } from '../../src/components/shared/button';
import Snackbar from '../../src/components/shared/snackbar';
import Modal from '../../src/components/shared/modal';

export default {
  title: 'Notifications',
};

export const NotificationsStory = () => (
  <div className="story">
    <div className="story__title">
      <h1 className="primary-header">
        Notifications
      </h1>
    </div>
    <div className="story__subtitle">
      <h3 className="tertiary-header">
        Snackbar
      </h3>
    </div>
    <div className="component-container">
      <div className="component-container__row">
        <Snackbar isMessageStateShown={false} snackbarText="Нет интернета. Проверяем соединение..." />
      </div>
      <div className="component-container__row">
        <Snackbar snackbarText="Трата на 12 000 ₽ успешно записана" />
      </div>
      <div className="component-container__row">
        <Snackbar messageState="danger" snackbarText="Ошибка. Трата на 12 000 ₽ не была записана" />
      </div>
      <div className="component-container__row">
        <Snackbar snackbarText="Трата на 12 000 ₽ успешно записана" linkText="Открыть аналитику" />
      </div>
    </div>
    <div className="story__subtitle">
      <h3 className="tertiary-header">
        Banner
      </h3>
    </div>
    <div className="component-container">
      <div className="component-container__row">
        <Banner title="Осталось пополнить счёт 🎉" text="Запишите текущий баланс счёта, чтобы было, что тратить. Потом можно будет внести певые расходы">
          <Button type="primary" size="small">Пополнить счет</Button>
        </Banner>
      </div>
    </div>
    <div className="story__subtitle">
      <h3 className="tertiary-header">
        Modals
      </h3>
    </div>
    <div className="component-container">
      <div className="component-container__row" style={{ background: '#F5F1F0', padding: '20px' }}>
        <Modal title="Удаление аккаунта">
          <p className="modal__text">Нам жаль, что так получилось! Если хотите, мы можем отправить архив данных вам на почту.</p>
          <div className="modal__controls">
            <Button size={BUTTON_SIZE.medium} type={BUTTON_TYPE.primary} isDanger>Удалить аккаунт</Button>
          </div>
        </Modal>
      </div>
    </div>
  </div>
);
