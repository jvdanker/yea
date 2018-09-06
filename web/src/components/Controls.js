import React from 'react'
import PropTypes from 'prop-types'

const Controls = (props) => {
    console.log('Controls', props);

    return (
        <div>
            {(props.voting_session_id.length === 0 || props.voting_finished) &&
            <button onClick={() => props.dispatchStartVotingSession(props.session_id)}>Start new vote</button>}
        </div>
    )
};

Controls.propTypes = {
    dispatchStartVotingSession: PropTypes.func.isRequired
};

export default Controls;
