import {connect} from 'react-redux';
import ControlsComponent from '../components/Controls';
import {startVotingSession,cancelVotingSession,showResultsVotingSession} from '../actions';

const mapStateToProps = state => ({
    session_id: state.user.session_id,
    voting_session_id: state.voting.voting_session_id,
    votes_required: state.voting.votes_required,
    votes_casted: state.voting.votes_casted
});

const mapDispatchToProps = dispatch => ({
    dispatchStartVotingSession: (session_id) => {
        dispatch(startVotingSession(session_id))
    },
    dispatchCancelVotingSession: (session_id) => {
        dispatch(cancelVotingSession(session_id))
    },
    dispatchShowResultsVotingSession: (session_id) => {
        dispatch(showResultsVotingSession(session_id))
    }
});

export const Controls = connect(mapStateToProps, mapDispatchToProps)(ControlsComponent);
