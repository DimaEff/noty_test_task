import React from 'react';
import {connect} from "react-redux";

import Header from "./Header";
import {logoutUser} from "../../Redux/user_reducer";
import {getUser} from "../../selectors/user_selectors";


const HeaderContainer = (props) => {

    return <Header {...props}/>;
};

const mapStateToProps = (state) => ({
    user: getUser(state),
})

export default connect(mapStateToProps, {logoutUser})(HeaderContainer);
