import React, {useEffect} from 'react';
import './App.scss';
import Users from './components/User/Users';
import User from './components/User/User';
import {useDispatch, useSelector} from 'react-redux';
import { fetchPosts } from './redux/actions';
import { Spin } from 'antd';
import { Router, Switch, Route } from 'react-router-dom';
const history = require("history").createBrowserHistory();

function App() {  
  const dispatch = useDispatch();
  const loading = useSelector(state => state.app.loading);
  useEffect(() => {
    dispatch(fetchPosts());
  },[dispatch])
  return (
    <div className="App">
      <Router history = {history}>
        <Switch>          
            <Route exact path="/">
              {loading ? <Spin /> : <Users/>} 
            </Route>   
            <Route path="/user/:id" children={<User/>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

