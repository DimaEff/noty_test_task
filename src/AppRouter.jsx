import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import {HOME_ROUTE} from "./utils/consts";
import withAuthRedirect from "./hocs/withAuthRedirect";
import {appRoutes} from "./routes";


const AppRouter = () => {
    return (
        <Switch>
            {appRoutes.map(({path, Component, exact, withAuth}) => {
                if (withAuth) {
                    return <Route path={path} exact={exact} component={withAuthRedirect(Component)}/>
                }

                return <Route path={path} exact={exact} component={Component}/>
            })}
            <Redirect to={HOME_ROUTE}/>
        </Switch>
    );
};

export default AppRouter;
