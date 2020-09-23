import { messagesActionTypes } from './actions';

const DEFAULT_STATE = {
  messages: [],
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case messagesActionTypes.SET_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    case messagesActionTypes.DELETE_MESSAGE:
      return {
        ...state,
        messages: state.messages.filter((message) => message.id !== action.payload),
      };
    default:
      return state;
  }
};
