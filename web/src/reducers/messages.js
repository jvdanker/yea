const messages = (state = [], action) => {
    console.log('reducer: messages:', state, action);

    switch (action.type) {
        case 'ADD_MESSAGE':
        case 'MESSAGE_RECEIVED':
            return state.concat([
                {
                    session_id: action.session_id,
                    message: action.message,
                    author: action.author,
                    id: action.id
                }
            ]);
        default:
            return state
    }
};

export default messages;
