import React from 'react';
import { HomePage } from '../components/pages/home';
import { HomePage as HomeAdminPage, RoomPage,ProfilePage } from '../components/pages/admin';
import { Route, Switch } from 'react-router-dom';
const Routes = () => (
    <Switch>
        <Route path="/" exact={true} component={HomePage}></Route>
        <Route path="/admin/" exact={true} component={HomeAdminPage}></Route>
        <Route path="/admin/room" exact={true} component={RoomPage}></Route>
        <Route path="/admin/profile" exact={true} component={ProfilePage}></Route>
    </Switch>
);
export default Routes;