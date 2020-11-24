import React , { Component } from 'react';
import Home from '../pages/Home'
import HomePage from "../pages/HomePage/HomePage"
import About from "../pages/About/About"
import Message from "../pages/Message/Message"
import {BrowserRouter,Route,Switch} from 'react-router-dom'

class AppRouter extends Component{
    render(){
        return (
            <BrowserRouter>
                <Home path="/">
                    {/* 子路由 */}
                    <Switch>
                        <Route exact path="/" component={HomePage}></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/message" component={Message}></Route>
                        <Route></Route>
                    </Switch>
                </Home>
            </BrowserRouter>
        )
    }
}
export default AppRouter;