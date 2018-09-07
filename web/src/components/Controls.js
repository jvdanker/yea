import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        maxWidth: 345,
        minWidth: 300,
        margin: 30,
        display: 'flex',
        flexDirection: 'column'
    },
    cardActionArea: {
        padding: '15px 0'
    }
};

function Controls(props) {
    console.log('Controls', props);

    const { classes } = props;

    return (
        <Card className={classes.card}>
            <CardActionArea className={classes.cardActionArea}>
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        Start voting
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button
                    size="small"
                    color="primary"
                    onClick={() => props.dispatchStartVotingSession(props.session_id)}
                >
                    Start
                </Button>
            </CardActions>
        </Card>
    );
}

Controls.propTypes = {
    dispatchStartVotingSession: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Controls);

