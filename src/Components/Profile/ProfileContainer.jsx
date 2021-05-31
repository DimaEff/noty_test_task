import React from 'react';
import {connect} from "react-redux";
import {useParams} from "react-router";

import Profile from "./Profile";
import {getUser} from "../../selectors/user_selectors";
import {Redirect} from "react-router-dom";
import {getProfileRoute} from "../../utils/consts";


const ProfileContainer = ({user}) => {
    const {username} = useParams();

    if (!username) return <Redirect to={getProfileRoute(user.username)}/>

    return <Profile username={username}/>;
};

const mapStateToProps = (state) => ({
    user: getUser(state),
})

export default connect(mapStateToProps, {})(ProfileContainer);
