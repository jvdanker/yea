import {takeEvery} from 'redux-saga/effects';
import * as types from '../constants/ActionTypes';

const handleNewMessage = function* handleNewMessage(params) {

    yield takeEvery(types.ADD_MESSAGE, (action) => {
        console.log('handleNewMessage: ADD_MESSAGE', action, params);
        params.socket.send(JSON.stringify(action));
    });

    yield takeEvery(types.JOIN_SESSION, (action) => {
        console.log('handleNewMessage: JOIN_SESSION', action, params);
        params.socket.send(JSON.stringify(action));
    });

    yield takeEvery(types.START_VOTING_SESSION, (action) => {
        console.log('handleNewMessage: START_VOTING_SESSION', action, params);
        params.socket.send(JSON.stringify(action));
    });

};

export default handleNewMessage;
