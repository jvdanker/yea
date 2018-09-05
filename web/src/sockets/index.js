import * as types from '../constants/ActionTypes';
import {
    idReceived,
    populateUsersList,
    votingSessionStarted,
    votingSessionCancelled,
    voteAccepted,
    votingUpdate,
    votingFinished
} from '../actions';

const setupSocket = (dispatch) => {
    const socket = new WebSocket('ws://localhost:8989');

    socket.onopen = () => {
    };

    socket.onmessage = (event) => {
        console.log('websocket onmessage:', event);

        const data = JSON.parse(event.data);
        switch (data.type) {
            case types.VOTING_SESSION_STARTED:
                dispatch(votingSessionStarted(data));
                break;
            case types.VOTING_SESSION_CANCELLED:
                dispatch(votingSessionCancelled(data.voting_session_id));
                break;
            case types.VOTE_ACCEPTED:
                dispatch(voteAccepted());
                break;
            case types.VOTING_UPDATE:
                dispatch(votingUpdate(data));
                break;
            case types.VOTING_FINISHED:
                // dispatch(votingFinished(data));
                break;

            case types.NEW_CONNECTION:
                dispatch(idReceived(data.session_id));
                break;
            case types.USERS_LIST:
                dispatch(populateUsersList(data.users));
                break;
            default:
                break;
        }
    };

    return socket
};

export default setupSocket;
