export const messagesActionTypes = {
  SET_MESSAGE: 'SET_MESSAGE',
  DELETE_MESSAGE: 'DELETE_MESSAGE',
};

export const setMessage = (message) => {
  console.log('setMessage metod');
  return {
    type: messagesActionTypes.SET_MESSAGE,
    payload: message,
  };
};

export const deleteMessage = (messageId) => ({
  type: messagesActionTypes.DELETE_MESSAGE,
  payload: messageId,
});
