import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Forgot from '../pages/Forgot'
import Products from '../pages/Products'
import Women from '../pages/Women'
import Men from '../pages/Men'
import Jewelery from '../pages/Jewelery'
import Eletronics from '../pages/Eletronics'
import Inspect from '../pages/Inspect'
import Policy from '../pages/Policy'
import Search from '../pages/Search'
import NotFound from '../pages/NotFound'
import Delivery from '../pages/Delivery'
import Payment from '../pages/Payment'
import Profile from '../pages/Profile'
import Donate from '../pages/Donate';

import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsApp from '../components/WhatsApp'

export default function MainRoutes() {
    return (
        <>
            <Header />
            <div className="container">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/reset" component={Forgot} />
                    <Route exact path="/products" component={Products} />
                    <Route exact path="/women" component={Women} />
                    <Route exact path="/men" component={Men} />
                    <Route exact path="/jewelery" component={Jewelery} />
                    <Route exact path="/eletronics" component={Eletronics} />
                    <Route exact path="/products/:id" component={Inspect} />
                    <Route exact path="/policy" component={Policy} />
                    <Route exact path="/search/:busca" component={Search} />
                    <Route exact path="/delivery" component={Delivery} />
                    <Route exact path="/payment" component={Payment} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/donate" component={Donate} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </div>
            <Footer />
            <WhatsApp />
        </>
    )
}