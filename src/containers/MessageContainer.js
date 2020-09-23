import { connect } from 'react-redux';
import MessageLayout from '../components/messageLayout';
import { deleteMessage } from '../reducers/messages/actions';

const mapStateToProps = (state) => ({
  messages: state.accounts.messages,
});

const mapDispatchToProps = (dispatch) => ({
  deleteMessage: (messageId) => dispatch(deleteMessage(messageId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageLayout);
