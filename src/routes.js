import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Signup from './components/Signup/Signup';
import App from './App'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard';
import TeamPage from './components/Team/TeamPage';
import TeamManagement from './components/Team/TeamManagement';
import TeamSignup from './components/Signup/TeamSignup'

export default (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/dashboard' component={Dashboard}/>
    <Route path="/signup" component={Signup} />
    <Route path='/login' component={Login}/>
    <Route path='/TeamPage' component={TeamPage}/>
    <Route path='/TeamManagement' component={TeamManagement}/>
    <Route path='/TeamSignup' component={TeamSignup}/>

  </Switch>
);
