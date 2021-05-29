import {HOME_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE} from "./utils/consts";
import Login from "./Components/Login/Login";
import Profile from "./Components/Profile/Profile";
import Home from "./Components/Home/Home";


export const appRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home,
        exact: true,
    },
    {
        path: LOGIN_ROUTE,
        Component: Login,
    },
    {
        path: PROFILE_ROUTE,
        Component: Profile,
        withAuth: true,
    }
];