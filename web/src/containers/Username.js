import {connect} from 'react-redux';
import SetUsernameComponent from '../components/SetUsername';
import {setUsername} from '../actions';

const mapStateToProps = state => ({
    userid: state.user.userid,
    username: state.user.username
});

const mapDispatchToProps = dispatch => ({
    dispatch: (userid, author) => {
        console.log("dispatch setUsername", author);
        dispatch(setUsername(userid, author));
    }
});

export const Username = connect(mapStateToProps, mapDispatchToProps)(SetUsernameComponent);
