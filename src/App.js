import React from "react";
import {BrowserRouter} from 'react-router-dom';
import {makeStyles} from "@material-ui/core";

import AppRouter from "./AppRouter";
import HeaderContainer from "./Components/Header/HeaderContainer";


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
                <AppRouter />
            </div>
        </BrowserRouter>
    );
}

export default App;
