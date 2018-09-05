import React from 'react'
import User from "./User";
import {withStyles} from "@material-ui/core";

const styles = {
    row: {
        display: 'flex',
        justifyContent: 'center',
    },
};

const WaitingForVotes = (props) => {
    console.log('WaitingForVotes', props);
    const { voters, classes } = props;

    return (
        <div>
            <div className={classes.row}>
                {voters.map(voter => (
                    <User key={voter.id} name={voter.name} active={voter.voted}/>
                ))}
            </div>
        </div>
    )
};

export default withStyles(styles)(WaitingForVotes);
