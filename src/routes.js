import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Signup from './components/Signup/Signup';
import App from './App'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
export default (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path="/signup" component={Signup} />
    <Route path='/login' component={Login}/>
  </Switch>
);
