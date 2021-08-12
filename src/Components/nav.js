import React from 'react';
import { makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    title: {
        cursor: 'pointer'

    },
}));

export default function Nav() {
    const history = useHistory()
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>

                    <Typography variant="h6" className={classes.title} onClick={() => history.push('/')}>

                        Breaking Bad

                    </Typography>


                </Toolbar>
            </AppBar>
        </div>
    );
}
