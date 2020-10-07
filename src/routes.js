import React from 'react'
import { Route, BrowserRouter } from "react-router-dom"

import Home from "./pages/Home/index"
import Login from "./pages/Login/index"
import Register from "./pages/Register/index"
import Profile from "./pages/Profile/index"

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact/>
            <Route component={Login} path="/login"/>
            <Route component={Register} path="/register"/>
            <Route component={Profile} path="/Profile"/>
        </BrowserRouter>
    )
}

export default Routes