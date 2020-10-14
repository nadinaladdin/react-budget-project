export const modalActionTypes = {
  SHOW_MODAL: 'SHOW_MODAL',
  HIDE_MODAL: 'HIDE_MODAL',
};

export const showModal = (modalType, modalProps) => ({
  type: modalActionTypes.SHOW_MODAL,
  payload: { modalType, modalProps },
});

export const hideModal = () => ({
  type: modalActionTypes.HIDE_MODAL,
  payload: null,
});
