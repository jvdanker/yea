import React from 'react';
import connect from "react-redux/es/connect/connect";

import {Username} from './containers/Username';
import {Controls} from './containers/Controls';
import {CastVotes} from './containers/CastVotes';
import {VoteResults} from './containers/VoteResults';
import {WaitingForVotes} from './containers/WaitingForVotes';
import {Sidebar} from "./containers/Sidebar";
import ButtonAppBar from "./containers/ButtonAppBar";
import * as types from './constants/ActionTypes';

import './App.css';
import Grid from "@material-ui/core/Grid/Grid";
import {withStyles} from "@material-ui/core";

const mapStateToProps = state => ({
    username: state.user.username,
    voting_open: state.voting.voting_open,
    voting_finished: state.voting.voting_finished,
    voting_session_id: state.voting.voting_session_id,
    voting_status: state.voting.voting_status
});

const buttonStyles = {
};

const styles = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
    },
    content: {
        display: 'flex',
        flex: 1
    },
    controls: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex'
    },
    vote: {
        flex: 1,
        display: 'flex'
    },
    waiting: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex'
    },
    results: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex'
    }
};

const AppContainer = (props) => {
    console.log('AppContainer', props);

    const { classes } = props;

    return (
        <Grid className={classes.root}>
            <ButtonAppBar classes={buttonStyles} />

            <Grid
                container
                direction="row"
                className={classes.content}
            >
                {props.username === "" &&
                <Grid item className={classes.controls}>
                    <Username/>
                </Grid>
                }

                {props.username !== "" && (props.voting_status === types.VOTING_IDLE) &&
                <Grid item className={classes.controls}>
                    <Controls/>
                </Grid>
                }

                {(props.voting_status === types.VOTING_STARTED) &&
                <Grid item className={classes.vote}>
                    <CastVotes/>
                </Grid>
                }

                {(props.voting_status === types.VOTING_WAITING) &&
                <Grid item className={classes.waiting}>
                    <WaitingForVotes />
                </Grid>
                }

                {(props.voting_status === types.VOTING_FINISHED) &&
                <Grid item className={classes.results}>
                    <VoteResults/>
                </Grid>
                }

                <Grid item style={{flex: 1, flexGrow: 0}}>
                    <Sidebar/>
                </Grid>
            </Grid>
        </Grid>
    );
};

const App = withStyles(styles)(connect(mapStateToProps, {})(AppContainer));

export default App;
