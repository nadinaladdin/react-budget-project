import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from '../shared/snackbar';
import { MessageType } from '../propTypes';

const MessageLayout = ({ messages, deleteMessage }) => (
  messages && messages.length > 0
    ? (
      <div className="message-layout">
        {messages.map((message) => (
          <Snackbar
            snackbarText={message.text}
            messageState={message.messageState}
            close={deleteMessage}
            id={message.id}
            key={message.id}
          />
        ))}
      </div>
    )
    : null
);

MessageLayout.propTypes = {
  messages: PropTypes.arrayOf(MessageType).isRequired,
  deleteMessage: PropTypes.func.isRequired,
};

export default MessageLayout;
