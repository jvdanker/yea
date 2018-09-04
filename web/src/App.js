import React from 'react';
import './App.css';
import {Sidebar} from './containers/Sidebar';
import {MessagesList} from './containers/MessagesList';
import {AddMessage} from './containers/AddMessage';
import {Controls} from './containers/Controls';
import {Username} from './containers/Username';
import connect from "react-redux/es/connect/connect";

const mapStateToProps = state => ({
    username: state.user.username
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
                </section>
            </div>
        }
    </div>
);

const App = connect(mapStateToProps, {})(AppContainer);

export default App;
