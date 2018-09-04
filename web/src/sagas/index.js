import {takeEvery} from 'redux-saga/effects';
import * as types from '../constants/ActionTypes';

const handleNewMessage = function* handleNewMessage(params) {

    yield takeEvery(types.JOIN_SESSION, (action) => {
        console.log('handleNewMessage: JOIN_SESSION', action, params);
        params.socket.send(JSON.stringify(action));
    });

    yield takeEvery(types.START_VOTING_SESSION, (action) => {
        console.log('handleNewMessage: START_VOTING_SESSION', action, params);
        params.socket.send(JSON.stringify(action));
    });

    yield takeEvery(types.CANCEL_VOTING_SESSION, (action) => {
        console.log('handleNewMessage: CANCEL_VOTING_SESSION', action, params);
        params.socket.send(JSON.stringify(action));
    });

    yield takeEvery(types.FINISH_VOTING_SESSION, (action) => {
        console.log('handleNewMessage: FINISH_VOTING_SESSION', action, params);
        params.socket.send(JSON.stringify(action));
    });

    yield takeEvery(types.CAST_VOTE, (action) => {
        console.log('handleNewMessage: CAST_VOTE', action, params);
        params.socket.send(JSON.stringify(action));
    });

};

export default handleNewMessage;
