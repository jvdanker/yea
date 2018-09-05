import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import deepOrange from '@material-ui/core/colors/deepOrange';
import deepPurple from '@material-ui/core/colors/deepPurple';

const styles = {
    avatar: {
        margin: 10,
    },
    orangeAvatar: {
        margin: 10,
        color: '#fff',
        backgroundColor: deepOrange[500],
    },
    purpleAvatar: {
        margin: 10,
        color: '#fff',
        backgroundColor: deepPurple[500],
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
};

function User(props) {
    console.log('User', props);
    const { classes } = props;
    const activeClass = props.active ? classes.purpleAvatar : classes.avatar;
    return (
        <div className={classes.card}>
            <Avatar className={activeClass}>{props.name.substr(0, 1).toUpperCase()}</Avatar>
            <span>{props.name}</span>
        </div>
    );
}

User.propTypes = {
    classes: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
};

export default withStyles(styles)(User);