import React from "react";
import {BrowserRouter, NavLink} from 'react-router-dom';

import Header from "./Components/Header/Header";
import AppRouter from "./AppRouter";
import {connect} from "react-redux";
import {login_user, logout_user} from "./Redux/user_reducer";
import {PROFILE_ROUTE} from "./utils/consts";


const App = ({isAuth, login_user, logout_user}) => {

    return (
        <BrowserRouter>
            isAuth: {isAuth ? 'true': 'false'}
            <button onClick={login_user}>login</button>
            <button onClick={logout_user}>logout</button>
            <div>
                <NavLink to={PROFILE_ROUTE}>Profile</NavLink>
            </div>
            <Header/>
            <AppRouter />
        </BrowserRouter>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.user.isAuth,
    }
}

export default connect(mapStateToProps, {login_user, logout_user})(App);
