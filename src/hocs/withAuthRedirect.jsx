import React from 'react';
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom';


const withAuthRedirect = (Component) => {

    const RedirectComponent = ({user, ...props}) => {
        if (!user) return <Redirect to={'login'}/>;

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