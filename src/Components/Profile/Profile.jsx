import React from 'react';
import {Container, Typography} from "@material-ui/core";


const Profile = ({username}) => {

    return (
        <Container maxWidth={'sm'}>
            <Typography variant={'h3'}>{username}</Typography>
        </Container>
    );
};

export default Profile;
