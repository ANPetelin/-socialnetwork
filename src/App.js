import React from 'react';
import './App.scss';
import Posts from './components/User/Posts';
import User from './components/User/User';
import {  BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {  
  return (
    <div className="App">
      <Router>
        <Switch>          
            <Route exact path="/">
              <Posts/>
            </Route>   
            <Route path="/user/:id" children={<User/>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

