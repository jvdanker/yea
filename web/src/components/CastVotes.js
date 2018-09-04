import React from 'react'
import PropTypes from "prop-types";

const CastVotes = (props) => {
    console.log('CastVotes', props);

    return (
        <div>
            <h1>Cast your vote</h1>
            <div><a href="" onClick={(e) => { e.preventDefault(); props.castVote(props.session_id, props.voting_session_id, 0);}}>?</a></div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>5</div>
            <div>8</div>
            <div>13</div>
        </div>
    )
};

CastVotes.propTypes = {
    castVote: PropTypes.func.isRequired,
};

export default CastVotes;
