export const messagesActionTypes = {
  SET_MESSAGE: 'SET_MESSAGE',
  DELETE_MESSAGE: 'DELETE_MESSAGE',
};

export const deleteMessage = (messageId) => ({
  type: messagesActionTypes.DELETE_MESSAGE,
  payload: messageId,
});

export const setMessage = (message, timeout = 5000) => (dispatch) => {
  const messageId = Date.now();
  dispatch({
    type: messagesActionTypes.SET_MESSAGE,
    payload: { ...message, id: messageId },
  });

  setTimeout(() => dispatch(deleteMessage(messageId)), timeout);
};
