import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import './User.scss';
import User from './User';

const names =['Andrey', 'Max', 'Nikolay', 'Piter'];

const Users = ({state}) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let newUsers = [];
    for( let i=0; i < state.posts.fetchedPost.length; i++) {
      let index = state.posts.fetchedPost[i].userId - 1;
      if(newUsers[index]) {
        newUsers[index].data = newUsers[index].data.concat([state.posts.fetchedPost[i]]);
      }
      else newUsers[index] = {name: names[index], data: [state.posts.fetchedPost[i]], message: []};
    } 
    setUsers(newUsers)
  },[state]);

  return (
      <div>
          {users.map((user, index) => <div key={index}><User user={user} messages = {state.message.message}/></div>)}
      </div>    
  );
};

const mapStateToProps = state => {
    return {
        state: state
    }
}

export default connect(mapStateToProps, null)(Users);

