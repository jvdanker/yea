import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid/Grid";
import VotingCard from './VotingCard';

const styles = theme => ({
});

const cards = [
    { value: 1, url: '/static/images/grid-list/i1.png' },
    { value: 2, url: '/static/images/grid-list/i1.png' },
    { value: 3, url: '/static/images/grid-list/i1.png' },
    { value: 5, url: '/static/images/grid-list/i1.png' },
    { value: 8, url: '/static/images/grid-list/i1.png' },
    { value: 13, url: '/static/images/grid-list/i1.png' }
];

function CastVotes(props) {
    console.log('CastVotes', props);
    const { classes } = props;

    return (
        <Grid container direction="row">
            <Grid item xs={12}>
                <Grid container justify="center" spacing={24}>
                    {cards.map(card => (
                        <Grid item key={card.value}>
                            {(props.voted_for === "" || card.value === props.voted_for) &&
                                <VotingCard
                                    session_id={props.session_id}
                                    voting_session_id={props.voting_session_id}
                                    card={card}
                                    classes={classes}
                                    castVote={props.castVote}/>
                            }
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
}

CastVotes.propTypes = {
    classes: PropTypes.object.isRequired,
    castVote: PropTypes.func.isRequired
};

export default withStyles(styles)(CastVotes);