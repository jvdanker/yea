import React from 'react'

const VoteResults = (props) => {
    console.log('Results', props);

    return (
        <div>
            <h1>Results</h1>
            <ul>
                {props.voted.map(vote => (
                    <span key={vote.id}>{vote.name} - {vote.voted}</span>
                ))}
            </ul>
        </div>
    )
};

export default VoteResults;
