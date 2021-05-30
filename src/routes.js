import {HOME_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE} from "./utils/consts";
import Login from "./Components/Login/Login";
import Profile from "./Components/Profile/Profile";
import Home from "./Components/Home/Home";


// Для того, чтобы добавить новый путь
// нужно всего лишь добавить еще один объект
// и указать его путь(path), компонент(Component), который
// будет рендериться, а так же два необязательных свойства:
// withAuth(true|false) - указываем, является ли данный путь
// приватным, и exact.
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