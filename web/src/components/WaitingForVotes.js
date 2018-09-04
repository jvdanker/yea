import React from 'react'

const WaitingForVotes = (props) => {
    console.log('WaitingForVotes', props);

    return (
        <div>
            <h1>Waiting for votes</h1>
            <ul>
                {props.voters.map(voter => (
                    <li key={voter.id}>{voter.name} - {voter.voted && <span>Yes</span>}</li>
                ))}
            </ul>
        </div>
    )
};

export default WaitingForVotes;
