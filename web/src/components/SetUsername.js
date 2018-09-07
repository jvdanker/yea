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

function SetUsername(props) {
    console.log('SetUsername', props);

    const { classes } = props;
    let input;

    return (
        <Card className={classes.card}>
            <CardActionArea className={classes.cardActionArea}>
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        Join a session
                    </Typography>
                    <Typography component="p">
                        Your name<br/>
                        <input type="text" ref={(node) => { input = node }}
                               onKeyPress={(e) => {
                                   if (e.key === 'Enter') {
                                       props.dispatch(props.session_id, input.value);
                                   }
                               }}
                        />
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button
                    size="small"
                    color="primary"
                    onClick={() => props.dispatch(props.session_id, input.value)}
                >
                    Join
                </Button>
            </CardActions>
        </Card>
    );
}

SetUsername.propTypes = {
    dispatch: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SetUsername);

