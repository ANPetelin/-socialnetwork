import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spin  } from 'antd';
import { fetchPosts, fetchUsers } from '../redux/actions';
import Post from './Post';
import './User.scss';

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.fetchedPost);
  const users = useSelector(state => state.users.users);

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchUsers())
  },[dispatch]);
  
  let newPosts = [];
  for( let i = 0; i < 10; i++) {
    let index = Math.floor(Math.random() * 10) + i * 10;
    newPosts = [...newPosts, posts[index]];
  }

  if (posts.length && users.length) {
    return (
      <div>
        {newPosts.map(post => {
            let user = users.filter(u => u.id === post.userId);
            return <div key = {post.id}>
                <Post user = {user[0]} post={post} />
          </div>})}
      </div>    
  );}  
  else return <Spin/>
};

export default Posts;
