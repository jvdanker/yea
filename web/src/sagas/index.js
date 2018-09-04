import {takeEvery} from 'redux-saga/effects';
import * as types from '../constants/ActionTypes';

const handleNewMessage = function* handleNewMessage(params) {
    console.log('handleNewMessage', params);

    yield takeEvery(types.ADD_MESSAGE, (action) => {
        console.log('handleNewMessage: add message', action, params);
        params.socket.send(JSON.stringify(action));
    });

    yield takeEvery(types.JOIN_SESSION, (action) => {
        console.log('handleNewMessage: JOIN_SESSION', action, params);
        params.socket.send(JSON.stringify(action));
    });
};

export default handleNewMessage
