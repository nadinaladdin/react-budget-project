import { modalActionTypes } from './actions';

const DEFAULT_STATE = {
  modalProps: {},
  modalType: null,
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case modalActionTypes.SHOW_MODAL:
      return {
        modalType: action.payload.modalType,
        modalProps: action.payload.modalProps,
      };
    case modalActionTypes.HIDE_MODAL:
      return DEFAULT_STATE;
    default:
      return state;
  }
};
