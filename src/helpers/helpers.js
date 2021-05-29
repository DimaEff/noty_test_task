import {Route} from "react-router-dom";

export default routeHelper = (routesArr) => {
    return privateRoutes.map(({path, component}) => (
        <Route exact path={path} component={component}/>
    ))
}