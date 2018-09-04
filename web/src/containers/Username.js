import {connect} from 'react-redux';
import SetUsernameComponent from '../components/SetUsername';
import {joinSession} from '../actions';

const mapStateToProps = state => ({
    session_id: state.user.session_id,
    username: state.user.username
});

const mapDispatchToProps = dispatch => ({
    dispatch: (session_id, author) => {
        console.log("dispatch setUsername", author);
        dispatch(joinSession(session_id, author));
    }
});

export const Username = connect(mapStateToProps, mapDispatchToProps)(SetUsernameComponent);
