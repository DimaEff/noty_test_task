import React from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

import {loginUser} from "../../Redux/user_reducer";
import Login from "./Login";
import {getUser} from "../../selectors/user_selectors";
import {getProfileRoute} from "../../utils/consts";


const LoginContainer = ({loginUser, user}) => {
    if (user) return <Redirect to={getProfileRoute(user.username)}/>;

    return <Login loginUser={loginUser}/>;
};

const mapStateToProps = (state) => ({
    user: getUser(state),
})

export default connect(mapStateToProps, {loginUser})(LoginContainer);
