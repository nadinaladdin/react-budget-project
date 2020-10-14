import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Snackbar from '../shared/snackbar';
import { MessageType } from '../propTypes';

const MessageLayout = ({ messages, deleteMessage }) => {
  const messageItems = messages && messages.length > 0
    ? messages.map((message) => (
      <div className="message-layout__item">
        <Snackbar
          snackbarText={message.text}
          messageState={message.messageState}
          close={deleteMessage}
          id={message.id}
          key={message.id}
        />
      </div>
    ))
    : null;
  return (
    <div className="message-layout">
      <ReactCSSTransitionGroup
        transitionName="fade"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        {messageItems}
      </ReactCSSTransitionGroup>
    </div>
  );
};

MessageLayout.propTypes = {
  messages: PropTypes.arrayOf(MessageType).isRequired,
  deleteMessage: PropTypes.func.isRequired,
};

export default MessageLayout;
