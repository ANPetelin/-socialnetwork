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
    if(!posts.length) {
      dispatch(fetchPosts());
      dispatch(fetchUsers())
    }
  });
  
  let newPosts = [];
  for( let i = 0; i < 10; i++) {
    let index = Math.floor(Math.random() * 10) + i * 10;
    newPosts = [...newPosts, posts[index]];
  }

  if (posts.length && users.length) {
    return (
      <div>
        {newPosts.map(post => {
            return <Post key = {post.id} post={post} />
        })}
      </div>    
  );}  
  else return <Spin/>
};

export default Posts;
