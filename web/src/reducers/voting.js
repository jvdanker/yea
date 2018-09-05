import * as types from '../constants/ActionTypes';

const defaultState = {
    voting_session_id: "",
    voters: [],
    voted: [],
    voting_open: false,
    voting_finished: false,
    voting_status: types.VOTING_IDLE,
    voted_for: ""
};

const voting = (state = defaultState, action) => {
    console.log('reducer: voting:', state, action);

    switch (action.type) {
        case types.VOTING_SESSION_STARTED:
            return Object.assign({}, state, {
                voting_session_id: action.voting_session_id,
                voting_open: true,
                voting_finished: false,
                voters: action.voters,
                voted: action.voted,
                voting_status: types.VOTING_STARTED
            });
        case types.VOTING_SESSION_CANCELLED:
            return Object.assign({}, state, defaultState);

        case types.CAST_VOTE: {
            return Object.assign({}, state, {
                voted_for: action.vote
            });
        }

        case types.VOTE_ACCEPTED:
            return Object.assign({}, state, {
                voting_open: false,
                voting_status: types.VOTING_WAITING
            });
        case types.VOTING_UPDATE: {
            var results = Object.assign({}, state, action);
            results.voters.forEach(voter => {
                voter.voted = results.voted.indexOf(voter.id) !== -1;
            });

            return Object.assign({}, state, { ...results });
        }

        case types.VOTING_FINISHED:{
            var results = Object.assign({}, state, action);
            results.voting_finished = true;
            results.voting_status = types.VOTING_FINISHED;
            results.voted.forEach(vote => {
                var index = results.voters.findIndex(voter => voter.id === vote.id);
                vote.name = results.voters[index].name;
            });

            return Object.assign({}, state, { ...results });
        }

        default:
            return state
    }
};

export default voting;
