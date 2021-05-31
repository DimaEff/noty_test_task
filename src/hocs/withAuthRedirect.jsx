import React from 'react';
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom';

import {LOGIN_ROUTE} from "../utils/consts";


const withAuthRedirect = (Component) => {

    const RedirectComponent = ({user, ...props}) => {
        if (!user) return <Redirect to={LOGIN_ROUTE}/>;

        return <Component {...props}/>;
    }

    const mapStateToProps = (state) => {
        return {
            user: state.user.user,
        }
    }

    return connect(mapStateToProps, {})(RedirectComponent)
};

export default withAuthRedirect;