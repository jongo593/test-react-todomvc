import React from 'react';
import Paper from 'material-ui/Paper';

export default (props) => {
    return (
        <Paper style={{padding: 16}}>
            {
                props.children
            }
        </Paper>
    )
}