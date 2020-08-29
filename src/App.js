import React, {useEffect} from 'react';
import './App.scss';
import Users from './components/User/Users';
import {useDispatch, useSelector} from 'react-redux';
import { fetchPosts, fetchMessage } from './redux/actions';
import { Spin } from 'antd';

function App() {  
  const dispatch = useDispatch();
  const loading = useSelector(state => state.app.loading);
  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchMessage())
  },[dispatch])

  return (
    <div className="App">
      {loading ? <Spin /> : <Users/>}      
    </div>
  );
}

export default App;

