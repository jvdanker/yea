import {connect} from 'react-redux';
import ControlsComponent from '../components/Controls';
import {startVotingSession} from '../actions';

const mapStateToProps = state => ({
    session_id: state.user.session_id,
    username: state.user.username
});

const mapDispatchToProps = dispatch => ({
    dispatch: (session_id, message, author) => {
        console.log(message, author);
        dispatch(startVotingSession(session_id));
    }
});

export const Controls = connect(mapStateToProps, mapDispatchToProps)(ControlsComponent);
