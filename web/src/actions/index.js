import * as types from '../constants/ActionTypes'

let nextMessageId = 0;

export const idReceived = (session_id) => ({
    type: 'ID_RECEIVED',
    session_id: session_id
});

export const joinSession = (session_id, author) => ({
    type: types.JOIN_SESSION,
    session_id: session_id,
    id: nextMessageId++,
    name: author
});

export const addMessage = (session_id, message, author) => ({
    type: types.ADD_MESSAGE,
    session_id: session_id,
    id: nextMessageId++,
    message,
    author
});

export const messageReceived = (message, author) => ({
    type: types.MESSAGE_RECEIVED,
    id: nextMessageId++,
    message,
    author
});

export const populateUsersList = users => ({
    type: types.USERS_LIST,
    users
});

export const startVotingSession = (session_id) => ({
    type: types.START_VOTING_SESSION,
    session_id: session_id
});

export const votingSessionStarted = (voting_session_id, votes_required, votes_casted) => ({
    type: types.VOTING_SESSION_STARTED,
    voting_session_id: voting_session_id,
    votes_required: votes_required,
    votes_casted: votes_casted
});

export const cancelVotingSession = (voting_session_id) => ({
    type: types.CANCEL_VOTING_SESSION,
    voting_session_id: voting_session_id
});

export const votingSessionCancelled = (voting_session_id) => ({
    type: types.VOTING_SESSION_CANCELLED,
    voting_session_id: voting_session_id
});

export const showResultsVotingSession = (voting_session_id) => ({
    type: types.FINISH_VOTING_SESSION,
    voting_session_id: voting_session_id
});

export const castVote = (session_id, voting_session_id, vote) => ({
    type: types.CAST_VOTE,
    session_id: session_id,
    voting_session_id: voting_session_id,
    vote: vote
});
