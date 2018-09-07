import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import User from "./User";

const styles = {
    card: {
        maxWidth: 345,
        minWidth: 300,
        margin: 30
    },
    media: {
        height: 140,
    },
    users: {
        display: 'flex'
    }
};

function MediaCard(props) {
    const { voters, classes } = props;

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        Voting has started!
                    </Typography>
                    <Typography component="p">
                        Waiting for a vote from the following users...
                    </Typography>
                    <Typography className={classes.users}>
                        {voters.map(voter => (
                            <User key={voter.id} name={voter.name} active={voter.voted}/>
                        ))}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button
                    size="small"
                    color="primary"
                    onClick={() => props.dispatchCancelVotingSession(props.session_id)}
                >
                    Cancel this voting session
                </Button>
            </CardActions>
        </Card>
    );
}

MediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
    dispatchCancelVotingSession: PropTypes.func.isRequired
};

export default withStyles(styles)(MediaCard);
