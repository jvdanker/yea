import {takeEvery} from 'redux-saga/effects';
import * as types from '../constants/ActionTypes';

const handleNewMessage = function* handleNewMessage(params) {
    console.log('handleNewMessage', params);

    yield takeEvery(types.ADD_MESSAGE, (action) => {
        console.log('handleNewMessage: add message', action, params);
        action.author = params.username;
        params.socket.send(JSON.stringify(action));
    });

    yield takeEvery(types.SET_USERNAME, (action) => {
        console.log('handleNewMessage: set username', action, params);
        params.socket.send(JSON.stringify(action));
    });
};

export default handleNewMessage
