import * as types from '../constants/ActionTypes'

export const idReceived = (session_id) => ({
    type: types.ID_RECEIVED,
    session_id: session_id
});

export const joinSession = (session_id, author) => ({
    type: types.JOIN_SESSION,
    session_id: session_id,
    name: author
});

export const populateUsersList = users => ({
    type: types.USERS_LIST,
    users
});

export const startVotingSession = (session_id) => ({
    type: types.START_VOTING_SESSION,
    session_id: session_id
});

export const votingSessionStarted = (session) => ({
    type: types.VOTING_SESSION_STARTED,
    voting_session_id: session.voting_session_id,
    voters: session.voters,
    voted: session.voted
});

export const cancelVotingSession = (voting_session_id) => ({
    type: types.CANCEL_VOTING_SESSION,
    voting_session_id: voting_session_id
});

export const votingSessionCancelled = (voting_session_id) => ({
    type: types.VOTING_SESSION_CANCELLED,
    voting_session_id: voting_session_id
});

export const castVote = (session_id, voting_session_id, vote) => ({
    type: types.CAST_VOTE,
    session_id: session_id,
    voting_session_id: voting_session_id,
    vote: vote
});

export const voteAccepted = () => ({
    type: types.VOTE_ACCEPTED
});

export const votingUpdate = (data) => ({
    type: types.VOTING_UPDATE,
    ...data
});

export const votingFinished = (data) => ({
   type: types.VOTING_FINISHED,
    ...data
});
