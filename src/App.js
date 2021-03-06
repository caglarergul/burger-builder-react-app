/*
8888888b.                             888      888888  .d8888b.
888   Y88b                            888        "88b d88P  Y88b
888    888                            888         888 Y88b.
888   d88P  .d88b.   8888b.   .d8888b 888888      888  "Y888b.
8888888P"  d8P  Y8b     "88b d88P"    888         888     "Y88b.
888 T88b   88888888 .d888888 888      888         888       "888
888  T88b  Y8b.     888  888 Y88b.    Y88b.       88P Y88b  d88P
888   T88b  "Y8888  "Y888888  "Y8888P  "Y888      888  "Y8888P"
                                                .d88P
                                              .d88P"
                                             888P"
*/
import React, {Component} from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import {Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Logout from "./containers/Auth/Logout/Logout";
import {connect} from 'react-redux';
import * as actions from './store/actions/index';
import asyncComponent from './hoc/asyncComponent/asyncComponent';


const asyncCheckout = asyncComponent(() => {
    return import('./containers/Checkout/Checkout');
});


const asyncOrders = asyncComponent(() => {
    return import('./containers/Orders/Orders');
});

const asyncAuth = asyncComponent(() => {
    return import('./containers/Auth/Auth');
});


class App extends Component {

componentDidMount () {
    this.props.onTryAutoSignup();
}
    render() {

    let routes = (
        <Switch>

        <Route path="/auth" component={asyncAuth}/>
        <Route path="/" exact component={BurgerBuilder}/>
            <Redirect to="/"/>
        </Switch>

    );

    if (this.props.isAuthenticated) {
        routes = (
            <Switch>
                <Route path="/checkout" component={asyncCheckout}/>
                <Route path="/orders" component={asyncOrders}/>
                <Route path="/logout" component={Logout}/>
                <Route path="/auth" component={asyncAuth}/>
                <Route path="/" exact component={BurgerBuilder}/>
                <Redirect to="/"/>

            </Switch>

        );
    }
        return (
            <div>
                <Layout>
                    {routes}
                </Layout>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignup: () => dispatch(actions.authCheckState())
    }
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
