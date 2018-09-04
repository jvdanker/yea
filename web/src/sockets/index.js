import * as types from '../constants/ActionTypes';
import {
    idReceived,
    messageReceived,
    populateUsersList,
    votingSessionStarted,
    votingSessionCancelled,
    voteAccepted,
    votingFinished
} from '../actions';

const setupSocket = (dispatch) => {
    const socket = new WebSocket('ws://localhost:8989');

    socket.onopen = () => {
        // socket.send(JSON.stringify({
        //   type: types.ADD_USER,
        //   name: username
        // }))
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
            case types.VOTING_FINISHED:
                dispatch(votingFinished());
                break;

            case 'NEW_CONNECTION':
                dispatch(idReceived(data.session_id));
                break;
            case types.ADD_MESSAGE:
                dispatch(messageReceived(data.message, data.author));
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
