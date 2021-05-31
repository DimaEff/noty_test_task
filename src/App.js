import React from "react";
import {BrowserRouter, Link} from 'react-router-dom';
import {makeStyles, Typography} from "@material-ui/core";

import AppRouter from "./AppRouter";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {getProfileRoute, LOGIN_ROUTE} from "./utils/consts";


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(10),
    },
}))

const App = () => {
    const styles = useStyles();

    return (
        <BrowserRouter>
            <HeaderContainer />
            <div className={styles.root}>
                <Typography variant={'h6'}>
                    <Link to={LOGIN_ROUTE}>login</Link>
                </Typography>
                <Typography variant={'h6'}>
                    <Link to={getProfileRoute()}>profile</Link>
                </Typography>
                <AppRouter />
            </div>
        </BrowserRouter>
    );
}

export default App;
