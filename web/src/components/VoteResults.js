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

function VoteResults(props) {
    console.log('Controls', props);

    const { classes } = props;

    return (
        <Paper className={classes.root} elevation={4}>
            <Typography variant="headline" component="h3">
                Vote results
            </Typography>
            <Typography component="p" className={classes.p}>
                <ul>
                    {props.voted.map(vote => (
                        <li key={vote.id}>{vote.name} - {vote.voted}</li>
                    ))}
                </ul>
            </Typography>

            <Button
                size="small"
                color="primary"
                onClick={() => props.dispatchStartVotingSession(props.session_id)}
            >
                Start new vote
            </Button>
        </Paper>
    );
}

VoteResults.propTypes = {
    dispatchStartVotingSession: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VoteResults);

