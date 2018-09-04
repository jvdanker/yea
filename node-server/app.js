const WebSocket = require('ws');

const wss = new WebSocket.Server({port: 8989});

const users = [];
var votingSession = {};

const broadcast = (data, ws) => {
    console.log('OUT BROADCAST:', data);

    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN && client !== ws) {
            client.send(JSON.stringify(data))
        }
    })
};

const interval = setInterval(function ping() {
    wss.clients.forEach(function each(ws) {
        if (ws.isAlive === false) return ws.terminate();

        ws.isAlive = false;
        ws.ping(noop);
    });
}, 30000);

function noop() {}

function heartbeat() {
    this.isAlive = true;
}

wss.on('connection', (ws) => {
    ws.isAlive = true;
    ws.on('pong', heartbeat);

    ws.send(JSON.stringify({
        type: 'NEW_CONNECTION',
        session_id: getUniqueID()
    }));

    let index;

    ws.on('message', (message) => {
        const data = JSON.parse(message);
        console.log('IN:', data);

        switch (data.type) {
            case 'START_VOTING_SESSION': {
                const voting_session_id = getUniqueID();

                var voters = Array.from(users, user => {
                    return {
                        id: user.id,
                        name: user.name
                    }
                });

                votingSession = {
                    voting_session_id: voting_session_id,
                    voters,
                    voted: []
                };

                const message = {
                    type: 'VOTING_SESSION_STARTED',
                    ...votingSession
                };
                broadcast(message);

                break;
            }
            case 'CANCEL_VOTING_SESSION': {
                const message = {
                    type: 'VOTING_SESSION_CANCELLED',
                    voting_session_id: data.voting_session_id
                };
                broadcast(message);

                break;
            }
            case 'CAST_VOTE': {
                var index = users.findIndex(item => item.session_id === data.session_id);
                console.log(votingSession);
                votingSession.voted.push({
                    id: users[index].id,
                    voted: data.vote
                });

                const message1 = JSON.stringify({
                    type: 'VOTE_ACCEPTED'
                });
                console.log('OUT:', message1);
                ws.send(message1);

                var votingUpdate = Array.from(votingSession.voted, vote => vote.id);
                const message = {
                    type: 'VOTING_UPDATE',
                    voters: votingSession.voters,
                    voted: votingUpdate
                };
                broadcast(message);

                if (votingSession.voted.length === votingSession.voters.length) {

                    const message = {
                        type: 'VOTING_FINISHED',
                        ...votingSession
                    };
                    broadcast(message);

                    votingSession = {};
                }

                break;
            }


            case 'JOIN_SESSION': {
                index = users.findIndex(item => item.session_id === data.session_id);
                console.log(users, index);

                if (index !== -1) {
                    users[index].name = data.name;
                } else {
                    index = users.length;
                    users.push({
                        session_id: data.session_id,
                        id: index+1,
                        name: data.name,
                    });
                    ws.index = index;
                }

                const message = JSON.stringify({
                    type: 'USERS_LIST',
                    users
                });
                console.log('OUT:', message);
                ws.send(message);

                broadcast({
                    type: 'USERS_LIST',
                    users
                }, ws);

                break;
            }
            case 'ADD_USER': {
                index = users.length;
                users.push({name: data.name, id: index + 1});

                ws.send(JSON.stringify({
                    type: 'USERS_LIST',
                    users
                }));

                broadcast({
                    type: 'USERS_LIST',
                    users
                }, ws);

                break;
            }
            case 'ADD_MESSAGE':
                broadcast({
                    type: 'ADD_MESSAGE',
                    message: data.message,
                    author: data.author
                }, ws);
                break;
            default:
                break;
        }
    });

    ws.on('close', (code, reason) => {
        console.log('close', code, reason, ws.index);
        users.splice(ws.index, 1);

        broadcast({
            type: 'USERS_LIST',
            users
        }, ws);
    })
});

getUniqueID = function () {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4() + s4() + '-' + s4();
};
