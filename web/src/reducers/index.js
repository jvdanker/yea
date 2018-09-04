import {combineReducers} from 'redux';
import messages from './messages';
import users from './users';
import user from './user';
import voting from './voting';

const chat = combineReducers({
    messages,
    users,
    user,
    voting
});

export default chat;
