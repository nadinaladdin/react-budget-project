import React from 'react';
import PropTypes from 'prop-types';
import CreateTransactionModalContainer from '../../containers/modals/createTransactionModalContainer';
import UpdateTransactionModalContainer from '../../containers/modals/updateTransactionModalContainer';

const MODAL_COMPONENTS = {
  CREATE_TRANSACTION: CreateTransactionModalContainer,
  UPDATE_TRANSACTION: UpdateTransactionModalContainer,
};

const ModalRoot = ({ modalType, modalProps }) => {
  if (!modalType) {
    return null;
  }

  const SpecificModal = MODAL_COMPONENTS[modalType];
  return <SpecificModal {...modalProps} />;
};

ModalRoot.propTypes = {
  modalType: PropTypes.string,
};

ModalRoot.defaultProps = {
  modalType: null,
};

export default ModalRoot;
