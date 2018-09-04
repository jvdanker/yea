import * as types from '../constants/ActionTypes';

const defaultState = {
    voting_session_id: "",
    votes_required: 0,
    votes_casted: 0
};

const voting = (state = defaultState, action) => {
    console.log('reducer: voting:', state, action);

    switch (action.type) {
        case types.VOTING_SESSION_STARTED:
            return Object.assign({}, state, { voting_session_id: action.voting_session_id });
        case types.VOTING_SESSION_CANCELLED:
            return Object.assign({}, state, defaultState);
        default:
            return state
    }
};

export default voting;
