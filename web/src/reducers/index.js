import {combineReducers} from 'redux';
import users from './users';
import user from './user';
import voting from './voting';

const chat = combineReducers({
    users,
    user,
    voting
});

export default chat;
