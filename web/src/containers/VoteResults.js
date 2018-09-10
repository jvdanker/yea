import {connect} from 'react-redux';
import VoteResultsComponent from '../components/VoteResults';
import {startVotingSession} from '../actions';

const mapStateToProps = state => ({
    session_id: state.user.session_id,
    voting_session_id: state.voting.voting_session_id,
    voters: state.voting.voters,
    voted: state.voting.voted,
    voting_status: state.voting.voting_status,
    voting_finished: state.voting.voting_finished
});

const mapDispatchToProps = dispatch => ({
    dispatchStartVotingSession: (session_id) => {
        dispatch(startVotingSession(session_id))
    }
});

export const VoteResults = connect(mapStateToProps, mapDispatchToProps)(VoteResultsComponent);