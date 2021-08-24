import React from 'react';
import {Switch, Route } from 'react-router-dom'
import NotFound from './utils/not_found/NotFound'
import Home from './home/Home'
function Pages() {
    return (
        <Switch>
            <Route path='/' exact component={Home}/>

            <Route path='*' exact component={NotFound}/>
        </Switch>
    );
}

export default Pages;