import React from 'react'
import PropTypes from 'prop-types'

const SetUsername = (props) => {
    console.log('SetUsername', props);
    let input;

    return (
        <section>
            Your name:
            <input
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        props.dispatch(props.userid, input.value);
                        // input.value = '';
                    }
                }}
                type="text"
                ref={(node) => {
                    input = node
                }}
            />
        </section>
    )
};

SetUsername.propTypes = {
    dispatch: PropTypes.func.isRequired
};

export default SetUsername;
