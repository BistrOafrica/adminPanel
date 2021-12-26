import React,{useState} from 'react';
import SignIn from './Admin/LogIn';
import Menus from './Admin/Menus';
import './app.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from './Admin/pageListSync';
import NotFound from './Admin/Pages/NotFound'
import DashBoard from "./Admin/Pages/DashBoard";
import {activate,Login} from './Admin/Functions'


function App() {

    const navLinks = document.querySelectorAll("li.nav-Link");
    activate(navLinks);
    const LoggedIn=localStorage.getItem('AuthToken');
    return (
        <>
            {
                LoggedIn!==null ?
                <Router >
                <div className = 'App' >
                <Menus />
                    <Switch > { <Route exact path="/" component={DashBoard} /> }
                        {
                    routes.map((r, i) =>
                        <Route exact path = { `/dashboard${r.path}` }
                        component = { r.component }
                        key = { i }
                        />)}

                        <Route component = { NotFound }/>
                    </Switch>
                </div>
                </Router>:
                    <Router>
                        <Switch>
                            <Route  path="/*" component={SignIn} />
                            <Route  path="/login" component={SignIn} />

                        </Switch>

                    </Router>

                }

        </>
                );

            }

            export default App;