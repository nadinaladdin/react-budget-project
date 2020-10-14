import { connect } from 'react-redux';
import TransactionModal from '../../components/modals/transactionModal';
import { hideModal } from '../../reducers/modal/actions';
import { updateTransaction } from '../../reducers/transactions/actions';

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
  accounts: state.accounts.accounts,
});

const mapDispatchToProps = (dispatch) => ({
  saveTransaction: (transaction) => dispatch(updateTransaction(transaction)),
  hideModal: () => dispatch(hideModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionModal);
