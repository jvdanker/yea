import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid/Grid";
import VotingCard from './VotingCard';
import Typography from "@material-ui/core/Typography/Typography";
import Paper from "@material-ui/core/Paper/Paper";

const cards = [
    { value: 1, url: '/static/images/grid-list/i1.png' },
    { value: 2, url: '/static/images/grid-list/i1.png' },
    { value: 3, url: '/static/images/grid-list/i1.png' },
    { value: 5, url: '/static/images/grid-list/i1.png' },
    { value: 8, url: '/static/images/grid-list/i1.png' },
    { value: 13, url: '/static/images/grid-list/i1.png' }
];

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        margin: 30
    },
    p: {
        margin: '20px 0'
    },
    cards: {
        marginTop: 20
    }
});

function CastVotes(props) {
    console.log('CastVotes', props);
    const { classes } = props;

    return (
        <Paper className={classes.root} elevation={4}>
            <Typography variant="headline" component="h3">
                {props.voting_status === 'VOTING_STARTED' && 'Please cast your vote'}
                {props.voting_status === 'VOTING_WAITING' && 'Vote received, waiting for others'}
            </Typography>

            <Grid container direction="row" className={classes.cards}>
                <Grid item xs={12}>
                    <Grid container spacing={24}>
                        {cards.map(card => (
                            <Grid item key={card.value}>
                                {(props.voted_for === "" || card.value === props.voted_for) &&
                                    <VotingCard
                                        session_id={props.session_id}
                                        voting_session_id={props.voting_session_id}
                                        card={card}
                                        classes={classes}
                                        castVote={props.castVote}
                                        votedFor={props.voted_for}
                                    />
                                }
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}

CastVotes.propTypes = {
    classes: PropTypes.object.isRequired,
    castVote: PropTypes.func.isRequired
};

export default withStyles(styles)(CastVotes);