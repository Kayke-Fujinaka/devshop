import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login'
import Register from '../pages/Register'

export default function MainRoutes() {
    return(
        <>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
        </Switch>
        </>
    )
}