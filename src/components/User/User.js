import React from 'react';
import './User.scss';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './User.scss';
import { Comment, Avatar, Collapse, Spin  } from 'antd';

const Users = () => {    
  const posts = useSelector(state => state.posts.fetchedPost);
  let { id } = useParams();
  console.log(id)
  console.log(posts)
  return (
      <div className = "user__field">
          <h1>User: {id}</h1>
      </div>    
  );
};

export default Users;


