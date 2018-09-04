import * as types from '../constants/ActionTypes';

const user = (state = {}, action) => {
    console.log('reducer: user:', state, action);

    switch (action.type) {
        case 'ID_RECEIVED':
            return Object.assign({}, state, { userid: action.userid });
        case types.SET_USERNAME:
            return Object.assign({}, state, { username: action.name });
        default:
            return state
    }
};

export default user;
