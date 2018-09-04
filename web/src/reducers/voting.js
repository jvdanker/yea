import * as types from '../constants/ActionTypes';

const defaultState = {
    voting_session_id: "",
    votes_required: 0,
    votes_casted: 0,
    voting_open: false
};

const voting = (state = defaultState, action) => {
    console.log('reducer: voting:', state, action);

    switch (action.type) {
        case types.VOTING_SESSION_STARTED:
            return Object.assign({}, state, { voting_session_id: action.voting_session_id, voting_open: true });
        case types.VOTING_SESSION_CANCELLED:
            return Object.assign({}, state, defaultState);
        case types.VOTE_ACCEPTED:
            return Object.assign({}, state, { voting_open: false });
        case types.VOTING_FINISHED:
            return Object.assign({}, state, defaultState); // TODO after voting has finished, display the results

        default:
            return state
    }
};

export default voting;
