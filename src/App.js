import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Posts from './components/Posts';
import User from './components/User';
import './App.scss';

function App() {  
  return (
    <div className="App">
      <Router>
        <Switch>          
            <Route exact path="/">
              <Posts/>
            </Route>   
            <Route path="/user/:id">
              <User />
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

