import React from 'react'
import PropTypes from 'prop-types'

const Controls = (props) => {
    console.log('Controls', props);

    return (
        <div>
            <h1>Controls</h1>
            {(props.voting_session_id.length === 0 || props.voting_finished) &&
            <button onClick={() => props.dispatchStartVotingSession(props.session_id)}>Start new vote</button>}

            {props.voting_session_id.length !== 0 && props.voting_finished === false &&
            <button onClick={() => props.dispatchCancelVotingSession(props.session_id)}>Cancel voting</button>}
        </div>
    )
};

Controls.propTypes = {
    dispatchStartVotingSession: PropTypes.func.isRequired,
    dispatchCancelVotingSession: PropTypes.func.isRequired
};

export default Controls;
