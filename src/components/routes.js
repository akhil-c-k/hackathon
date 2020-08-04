import React from "react";
import { Route, Switch ,Redirect} from "react-router-dom";
import Login from './Login/Login'
import Landing from './dashboard/Landing'
import PrivateRoute from './PrivateRoute'
import PageNotfound from './PageNotFound'


const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
     <PrivateRoute path="/landing" component={Landing} exact={true}/>
     <Route component={PageNotfound} />
</Switch>
);

export default Routes;
