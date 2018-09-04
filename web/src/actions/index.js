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

export const addMessage = (message, author) => ({
    type: types.ADD_MESSAGE,
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
