import React from "react"
import Info from './Info';
import Settings from './Setting';

import {Link, Switch, Route, useRouteMatch} from "react-router-dom"

function Profile() {
    const match = useRouteMatch();
    console.log(match);
    return (
        <div>
            <h1>Profile Page</h1>
            <ul>
                <li><Link to={`${match.url}/info`}>Profile Info</Link></li>
                <li><Link to={`${match.url}/settings`}>Profile Settings</Link></li>
            </ul>

            <Switch>
                <Route path={`${match.path}/info`}>
                    <Info/>
                </Route>
                <Route path={`${match.path}/settings`}>
                    <Settings/>
                </Route>
            </Switch>
        </div>
    )
}

export default Profile