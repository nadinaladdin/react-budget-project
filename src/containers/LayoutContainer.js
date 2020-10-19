import { connect } from 'react-redux';
import Layout from '../components/layout';
import { showModal } from '../reducers/modal/actions';
import { createTransaction } from '../reducers/transactions/actions';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  createTransaction: (transaction) => dispatch(createTransaction(transaction)),
  showModal: (modalType, modalProps) => dispatch(showModal(modalType, modalProps)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
