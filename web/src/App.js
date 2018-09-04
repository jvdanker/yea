import React from 'react';
import connect from "react-redux/es/connect/connect";

import {Username} from './containers/Username';
import {Controls} from './containers/Controls';
import {CastVotes} from './containers/CastVotes';
import {VoteResults} from './containers/VoteResults';
import {WaitingForVotes} from './containers/WaitingForVotes';
import {Sidebar} from "./containers/Sidebar";

import './App.css';

const mapStateToProps = state => ({
    username: state.user.username,
    voting_open: state.voting.voting_open,
    voting_finished: state.voting.voting_finished,
    voting_session_id: state.voting.voting_session_id
});

const AppContainer = (props) => (
    <div>
        <Sidebar/>
        { props.username === "" && <Username/> }
        { props.username !== "" &&
            <div>
                <section id="main">
                    <Controls/>
                    {props.voting_open && <CastVotes/>}
                    {props.voting_finished && <VoteResults/>}
                    {(props.voting_session_id.length > 0 && !props.voting_finished) && <WaitingForVotes/>}
                </section>
            </div>
        }
    </div>
);

const App = connect(mapStateToProps, {})(AppContainer);

export default App;
