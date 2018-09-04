import * as types from '../constants/ActionTypes'

let nextMessageId = 0;

export const idReceived = (userid) => ({
    type: 'ID_RECEIVED',
    userid: userid
});

export const setUsername = (userid, author) => ({
    type: types.SET_USERNAME,
    userid: userid,
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
