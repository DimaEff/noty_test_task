import React from "react";
import {BrowserRouter, NavLink} from 'react-router-dom';

import AppRouter from "./AppRouter";
import {connect} from "react-redux";
import {PROFILE_ROUTE} from "./utils/consts";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {makeStyles} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(10),
    },
}))

const App = ({user}) => {
    const styles = useStyles();

    return (
        <BrowserRouter>
            <HeaderContainer />
            <div className={styles.root}>
                isAuth: {user ? 'true': 'false'}
                <div>
                    <NavLink to={PROFILE_ROUTE}>Profile</NavLink>
                </div>
                <AppRouter />
            </div>
        </BrowserRouter>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user.user,
    }
}

export default connect(mapStateToProps, {})(App);
