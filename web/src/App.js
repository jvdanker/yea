import React from 'react';
import connect from "react-redux/es/connect/connect";

import {Sidebar} from './containers/Sidebar';
import {MessagesList} from './containers/MessagesList';
import {AddMessage} from './containers/AddMessage';
import {Username} from './containers/Username';
import {Controls} from './containers/Controls';
import {CastVotes} from './containers/CastVotes';

import './App.css';

const mapStateToProps = state => ({
    username: state.user.username,
    voting_open: state.voting.voting_open
});

const AppContainer = (props) => (
    <div>
        <div>
            Your name: "{props.username}"
            { props.username === "" && <Username/> }
        </div>
        { props.username !== "" &&
            <div>
                <Sidebar/>
                <section id="main">
                    <MessagesList/>
                    <AddMessage/>
                    <Controls/>
                    {props.voting_open && <CastVotes/>}
                </section>
            </div>
        }
    </div>
);

const App = connect(mapStateToProps, {})(AppContainer);

export default App;
