import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid/Grid";

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300,
        width: '100%',
    },
    empty: {
        height: 200,
        width: 150,
        backgroundColor: 'black'
    },
    image: {
        position: 'relative',
        height: 200,
        width: 150,
        [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
            height: 100,
        },
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.15,
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {
                border: '4px solid currentColor',
            },
        },
    },
    focusVisible: {},
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
});

const cards = [
    { value: 1, url: '/static/images/grid-list/i1.png' },
    { value: 2, url: '/static/images/grid-list/i1.png' },
    { value: 3, url: '/static/images/grid-list/i1.png' },
    { value: 5, url: '/static/images/grid-list/i1.png' },
    { value: 8, url: '/static/images/grid-list/i1.png' },
    { value: 13, url: '/static/images/grid-list/i1.png' }
];

function castVote(props, card) {
    console.log('castVote', props, card);
    props.castVote(props.session_id, props.voting_session_id, card.value);
}

const Card = (props) => {
    console.log('Card', props);
    const {card, classes} = props;

    return (
        <Grid item key={card.value}>
            <ButtonBase
                focusRipple
                className={classes.image}
                focusVisibleClassName={classes.focusVisible}
                onClick={castVote.bind(this, props, card)}
            >
                <span className={classes.imageSrc} style={{ backgroundImage: `url(${card.url})`}} />
                <span className={classes.imageBackdrop} />
                <span className={classes.imageButton}>
                    <Typography
                        component="span"
                        variant="subheading"
                        color="inherit"
                        className={classes.imageTitle}
                    >
                        {card.value}
                        <span className={classes.imageMarked} />
                    </Typography>
                </span>
            </ButtonBase>
        </Grid>
    );
};

const ReadonlyCard = (props) => {
    console.log('ReadonlyCard', props);
    const {card, classes} = props;

    return (
        <Grid item key={card.value}>
            <div className={classes.empty}></div>
        </Grid>
    );
};

function CastVotes(props) {
    console.log('CastVotes', props);
    const { classes } = props;

    return (
        <Grid
            container
            direction="row"
        >
            <Grid item xs={12}>
                <Grid container justify="center" spacing={24}>
                    {cards.map(card => (
                        <div key={card.value}>
                            {(props.voted_for === "" || card.value === props.voted_for) &&
                                <Card
                                    session_id={props.session_id}
                                    voting_session_id={props.voting_session_id}
                                    card={card}
                                    classes={classes}
                                    castVote={props.castVote}/>
                            }
                            {(props.voted_for !== "" && card.value !== props.voted_for) &&
                                <ReadonlyCard classes={classes}/>
                            }
                        </div>
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