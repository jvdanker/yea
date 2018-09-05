/*
import React from 'react'
import User from "./User";
import {withStyles} from "@material-ui/core";

const styles = {
    row: {
        display: 'flex',
        justifyContent: 'center',
    },
};

const WaitingForVotes = (props) => {
    console.log('WaitingForVotes', props);
    const { voters, classes } = props;

    return (
        <div>
            <div className={classes.row}>
                {voters.map(voter => (
                    <User key={voter.id} name={voter.name} active={voter.voted}/>
                ))}
            </div>
        </div>
    )
};

export default withStyles(styles)(WaitingForVotes);

*/

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
    },
    media: {
        height: 140,
    },
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
                        Below are presented all currently attending users for who we are waiting for to cast their vote...
                    </Typography>
                    <Typography>
                        {voters.map(voter => (
                            <User key={voter.id} name={voter.name} active={voter.voted}/>
                        ))}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Cancel this voting session
                </Button>
            </CardActions>
        </Card>
    );
}

MediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);
