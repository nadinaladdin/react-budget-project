import { connect } from 'react-redux';
import ModalRoot from '../../components/modals';

const mapStateToProps = (state) => ({
  modalType: state.modal.modalType,
  modalProps: state.modal.modalProps,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalRoot);
