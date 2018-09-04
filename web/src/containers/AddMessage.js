import {connect} from 'react-redux';
import AddMessageComponent from '../components/AddMessage';
import {addMessage} from '../actions';

const mapStateToProps = state => ({
    session_id: state.user.session_id,
    username: state.user.username
});

const mapDispatchToProps = dispatch => ({
    dispatch: (session_id, message, author) => {
        console.log(message, author);
        dispatch(addMessage(session_id, message, author));
    }
});

export const AddMessage = connect(mapStateToProps, mapDispatchToProps)(AddMessageComponent);
