import {connect} from 'react-redux';
import WaitingForVotesComponent from '../components/WaitingForVotes';
import {cancelVotingSession} from "../actions";

const mapStateToProps = state => ({
    session_id: state.user.session_id,
    voting_session_id: state.voting.voting_session_id,
    voters: state.voting.voters,
    voted: state.voting.voted
});

const mapDispatchToProps = dispatch => ({
    dispatchCancelVotingSession: (session_id) => {
        dispatch(cancelVotingSession(session_id))
    }
});

export const WaitingForVotes = connect(mapStateToProps, mapDispatchToProps)(WaitingForVotesComponent);
