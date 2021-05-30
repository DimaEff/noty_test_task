import React from 'react';
import {connect} from "react-redux";
import * as yup from 'yup';
import {useHistory} from "react-router";

import {login_user} from "../../Redux/user_reducer";
import {Container} from "@material-ui/core";
import MyForm from "../common/MyForm";


const schema = yup.object().shape({
    email: yup
        .string()
        .required('Email is a required field.')
        .email('Email should have correct format.'),

    password: yup
        .string()
        .required('Password is a required field.')
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        ),

    username: yup
        .string()
        .required('Name is a required field.')
        .min(3, 'The minimum password length is 3 symbols'),
})

const Login = ({login_user}) => {
    const history = useHistory();

    const login = async (formData) => {
        await login_user(formData);
        history.push('/profile');
    }

    return (
        <Container maxWidth={"sm"}>
            <MyForm onSubmit={login} schema={schema}>
                {{
                    fields: [
                        {name: 'email', label: 'Email', },
                        {name: 'password', label: 'Password', },
                        {name: 'username', label: 'Name', },
                    ],
                    buttons: [
                        {type: 'submit', name: 'login',},
                        {name: 'cancel', action: () => history.push('/'),},
                    ]
                }}
            </MyForm>
        </Container>
    )
}

export default connect(null, {login_user})(Login);
