import React from 'react';
import { makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    title: {
        cursor: 'pointer',
        color: '#fff',
    },
    link: {
        textDecoration: "none"
    }
}));

export default function Nav() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="sticky">
                <Toolbar>
                    <Link to='/' className={classes.link}>
                        <Typography variant="h6" className={classes.title}>
                            Breaking Bad
                        </Typography>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}
