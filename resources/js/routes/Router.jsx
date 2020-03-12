import React from "react";
import {BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Register from "../containers/Register";
import Login from "../containers/Login";
import Users from "../containers/Users";
import UsersEdit from "../containers/UsersEdit";
import ClientsRegister from "../containers/ClientsRegister";
import Clients from "../containers/Clients";
import ClientsEdit from "../containers/ClientsEdit";

const Router = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={() => (
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1>Prueba Backend Developer</h1>
                                <p>Esta prueba es Desarrollada por Santiago Marulanda</p>
                            </div>
                        </div>
                    )}/>
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/register/client" component={ClientsRegister}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/users" component={Users}/>
                    <Route exact path="/users/:id" component={UsersEdit}/>
                    <Route exact path="/clients" component={Clients}/>
                    <Route exact path="/clients/:id" component={ClientsEdit}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
};

export default Router;
