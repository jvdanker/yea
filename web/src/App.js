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

const mapStateToProps = state => ({
    username: state.user.username,
    voting_open: state.voting.voting_open,
    voting_finished: state.voting.voting_finished,
    voting_session_id: state.voting.voting_session_id,
    voting_status: state.voting.voting_status
});

const buttonStyles = {};

const AppContainer = (props) => (
    <div>
        <ButtonAppBar classes={buttonStyles} />
        <Sidebar/>
        Voting status: {props.voting_status}
        { props.username === "" && <Username/> }
        { props.username !== "" &&
            <div>
                <Controls/>
                {(props.voting_status === types.VOTING_STARTED || props.voting_status === types.VOTING_WAITING) &&
                    <CastVotes/>
                }
                {props.voting_status === types.VOTING_FINISHED && <VoteResults/>}
                {(props.voting_status !== types.VOTING_IDLE && props.voting_status !== types.VOTING_FINISHED) &&
                    <WaitingForVotes/>
                }
            </div>
        }
    </div>
);

const App = connect(mapStateToProps, {})(AppContainer);

export default App;
