import React from 'react';
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    bar: {
        backgroundColor: "#424242",
        display: "grid",
        gridTemplateColumns: '0.07fr 0.07fr 0.07fr 0.07fr'
    },
    link: {
        weight: "fit-content",
        height: "fit-content"
    }
}));

export default function NavBar() {
    const history = useHistory();
    const home = () => history.push("/")
    const client = () => history.push("/clients")
    const actions = () => history.push("/actions")
    const analytics = () => history.push("/analytics")

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar className={classes.bar} position="static">
                <div className={classes.link} onClick={home}>Home</div>
                <div className={classes.link} onClick={client}>Clients</div>
                <div className={classes.link} onClick={actions}>Actions</div>
                <div className={classes.link} onClick={analytics}>Analytics</div>
            </AppBar>
        </div>
    );
}