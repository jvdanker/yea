const WebSocket = require('ws');

const wss = new WebSocket.Server({port: 8989});

const users = [];

const broadcast = (data, ws) => {
    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN && client !== ws) {
            client.send(JSON.stringify(data))
        }
    })
};

wss.getUniqueID = function () {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4() + s4() + '-' + s4();
};

wss.on('connection', (ws) => {
    ws.send(JSON.stringify({
        type: 'NEW_CONNECTION',
        session_id: wss.getUniqueID()
    }));

    let index;

    ws.on('message', (message) => {
        const data = JSON.parse(message);
        console.log(message);

        switch (data.type) {
            case 'START_VOTING_SESSION': {
                const message = {
                    type: 'VOTING_SESSION_STARTED',
                    voting_session_id: wss.getUniqueID()
                };
                broadcast(message);

                break;
            }
            case 'JOIN_SESSION': {
                index = users.findIndex(item => item.session_id === data.session_id);

                if (index !== -1) {
                    users[index].name = data.name;
                } else {
                    index = users.length;
                    users.push({
                        session_id: data.session_id,
                        id: index+1,
                        name: data.name,
                    });
                }

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

    ws.on('close', () => {
        users.splice(index, 1);

        broadcast({
            type: 'USERS_LIST',
            users
        }, ws);
    })
});
