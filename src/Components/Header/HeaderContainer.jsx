import React from 'react';
import {connect} from "react-redux";

import Header from "./Header";
import {logout_user} from "../../Redux/user_reducer";


const HeaderContainer = (props) => {

    return <Header {...props}/>;
};

const mapStateToProps = (state) => ({
    user: state.user.user,
})

export default connect(mapStateToProps, {logout_user})(HeaderContainer);
