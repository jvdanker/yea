import {connect} from 'react-redux';
import VoteResultsComponent from '../components/VoteResults';

const mapStateToProps = state => ({
    session_id: state.user.session_id,
    voting_session_id: state.voting.voting_session_id,
    voters: state.voting.voters,
    voted: state.voting.voted,
    voting_status: state.voting.voting_status
});

export const VoteResults = connect(mapStateToProps, {})(VoteResultsComponent);