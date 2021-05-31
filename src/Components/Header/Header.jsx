import React from 'react';
import {AppBar, Box, Container, IconButton, makeStyles, Toolbar, Typography} from "@material-ui/core";
import ExitToAppSharpIcon from '@material-ui/icons/ExitToAppSharp';

import {Link} from "react-router-dom";
import {LOGIN_ROUTE, getProfileRoute} from "../../utils/consts";


const useStyles = makeStyles((theme) => ({
    leftSide: {
        display: 'flex',
    },
    label: {
        textDecoration: 'none',
        color: 'white',
        marginTop: theme.spacing(1),
    },
    authText: {
        outline: 'none',
        textDecoration: 'none',
        color: 'inherit',
    }
}))

const Header = ({user, logoutUser}) => {
    const styles = useStyles();

    return (
        <AppBar fixed>
            <Container fixed>
                <Toolbar>
                    <Box flexGrow={1} className={styles.leftSide}>
                        <Link to={'/'} className={styles.label}>
                            <Typography variant="h4">
                                home
                            </Typography>
                        </Link>
                    </Box>
                    {user ?
                        (<>
                            <IconButton onClick={logoutUser}>
                                <ExitToAppSharpIcon fontSize={'large'}/>
                            </IconButton>
                            <Typography variant="h6">
                                <Link to={getProfileRoute(user.username)} className={styles.authText}>{user.username || 'test'}</Link>
                            </Typography>
                        </>) :
                        (<>
                            <Typography variant={'h6'}>
                                <Link to={LOGIN_ROUTE} className={styles.authText}>login</Link>
                            </Typography>
                        </>)
                    }
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;

