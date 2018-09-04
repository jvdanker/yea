import React from 'react'
import PropTypes from 'prop-types'

const AddMessage = (props) => {
    console.log('AddMessage', props);

    let input;

    return (
        <section id="new-message">
            <input
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        props.dispatch(props.session_id, input.value, props.username);
                        input.value = ''
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

AddMessage.propTypes = {
    dispatch: PropTypes.func.isRequired
};

export default AddMessage;
