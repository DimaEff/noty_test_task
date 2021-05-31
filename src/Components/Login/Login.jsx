import React from 'react';
import * as yup from 'yup';
import {useHistory} from "react-router";

import {Container} from "@material-ui/core";
import MyForm from "../common/MyForm";
import {getProfileRoute, HOME_ROUTE} from "../../utils/consts";
import {Redirect} from "react-router-dom";


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

const Login = ({loginUser}) => {
    const history = useHistory();

    const login = async (formData) => {
        await loginUser(formData);
        history.push(getProfileRoute(formData.username));
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
                        {name: 'cancel', action: () => history.push(HOME_ROUTE),},
                    ]
                }}
            </MyForm>
        </Container>
    )
}

export default Login;
