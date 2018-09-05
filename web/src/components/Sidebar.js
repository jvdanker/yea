import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from "@material-ui/core";
import deepOrange from "@material-ui/core/colors/deepOrange";
import deepPurple from "@material-ui/core/colors/deepPurple";
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';

const styles = {
    row: {
        display: 'flex',
        justifyContent: 'center',
    },
    avatar: {
        margin: 0,
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
    },
    chip: {
        margin: 10
    },
    list: {
        display: 'flex',
        flexDirection: 'column'
    }
};

const Sidebar = (props) => {
    const { users, classes } = props;
    return (
        <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-end"
        >
            {users.map(user => (
                <Grid item key={user.id}>
                    <Chip
                        avatar={<AccountCircle className={classes.avatar} />}
                        label={user.name}
                        className={classes.chip}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

Sidebar.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired).isRequired
};

export default withStyles(styles)(Sidebar);
