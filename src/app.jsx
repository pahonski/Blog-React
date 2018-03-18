import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, Redirect } from 'react-router';
import MainLayout from './app/layouts/MainLayout';
import Main from './app/pages/Main';
import About from './app/pages/About';
import Services from './app/pages/Services';
import Users from './app/pages/Users';
import ErrorPage from './app/pages/ErrorPage';


const app = document.getElementById('app');

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={MainLayout}>
            <IndexRoute component={Main} />
            <Route path="About" component={About} />
            <Route path="Services" component={Services} />
            <Route path="Users" component={Users} />
            <Route path="*" component={ErrorPage}/>
        </Route>

    </Router>
,app);