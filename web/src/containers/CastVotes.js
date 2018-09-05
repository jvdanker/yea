import {connect} from 'react-redux';
import CastVotesComponent from '../components/CastVotes';
import {castVote} from '../actions';

const mapStateToProps = state => ({
    session_id: state.user.session_id,
    voting_session_id: state.voting.voting_session_id,
    voters: state.voting.voters,
    voted: state.voting.voted,
    voted_for: state.voting.voted_for
});

const mapDispatchToProps = dispatch => ({
    castVote: (session_id, voting_session_id, vote) => {
        dispatch(castVote(session_id, voting_session_id, vote))
    }
});

export const CastVotes = connect(mapStateToProps, mapDispatchToProps)(CastVotesComponent);
