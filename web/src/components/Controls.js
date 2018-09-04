import React from 'react'
import PropTypes from 'prop-types'

const Controls = (props) => {
    console.log('Controls', props);

    return (
        <div>
            <h1>Controls</h1>
            <button onClick={(e) => props.dispatch(props.session_id, "START_VOTE_SESSION")}>Start new vote</button>
        </div>
    )
};

Controls.propTypes = {
    dispatch: PropTypes.func.isRequired
};

export default Controls;
