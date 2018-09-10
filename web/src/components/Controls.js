import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    p: {
        margin: '20px 0'
    }
});

function Controls(props) {
    console.log('Controls', props);

    const { classes } = props;

    return (
        <Paper className={classes.root} elevation={4}>
            <Typography variant="headline" component="h3">
                Ready to start voting
            </Typography>
            <Typography component="p" className={classes.p}>
                Press 'start' to begin a new voting session.
            </Typography>

            <Button
                size="small"
                color="primary"
                onClick={() => props.dispatchStartVotingSession(props.session_id)}
            >
                Start voting
            </Button>
        </Paper>
    );
}

Controls.propTypes = {
    dispatchStartVotingSession: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Controls);

