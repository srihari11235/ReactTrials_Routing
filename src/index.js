import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './components/login';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { Home } from './components/home';
import Contact from './components/contact';
import NotFound from './components/notfound'
import authService from './components/authService';

//Summary
//Protecting the path and checking if the user is authenticated or not. 
//All routes defined with PrivateRoute component will be authenticated, if not will be redirected to the login page. 


const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route {...rest} render = {(props) => (
         authService.isAuthenticated === true ? 
            <Component {...props} />
            : <Redirect to= "/login" />
    )}/>
);


const routing = (
    <Router>
        <Switch>
            <Route path = "/" component = {Login} exact/>
            <Route path = "/login" component = {Login} />
            <PrivateRoute path="/home" component={Home} />
            <PrivateRoute path ="/contact" component={Contact}/>
            <Route component={NotFound} />
        </Switch>
    </Router>
)


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
