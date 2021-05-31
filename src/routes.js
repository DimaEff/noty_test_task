import {HOME_ROUTE, LOGIN_ROUTE, getProfileRoute} from "./utils/consts";
import Home from "./Components/Home/Home";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import LoginContainer from "./Components/Login/LoginContainer";


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
        Component: LoginContainer,
    },
    {
        path: getProfileRoute(),
        Component: ProfileContainer,
        withAuth: true,
    }
];