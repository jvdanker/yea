import * as types from '../constants/ActionTypes';

const users = (state = [], action) => {
    console.log('reducer: users:', state, action);

    switch (action.type) {
        case types.USERS_LIST:
            console.log("users list");
            return action.users;
        default:
            return state
    }
};

export default users;
