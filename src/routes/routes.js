import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Forgot from '../pages/Forgot'
import Products from '../pages/Products'

export default function MainRoutes() {
    return(
        <>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/reset" component={Forgot} />
            <Route exact path="/products" component={Products} />
        </Switch>
        </>
    )
}