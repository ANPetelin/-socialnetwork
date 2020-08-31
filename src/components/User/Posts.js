import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Comment, Avatar, Collapse, Spin  } from 'antd';
import moment from 'moment';
import { fetchComments, fetchPosts, fetchUsers } from '../../redux/actions';
import './User.scss';

const { Panel } = Collapse;

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

const Post = (props) => {
  const dispatch = useDispatch();
  const comments = useSelector(state => state.comments.comments.filter(comment => comment.postId === props.user.id));

  return (
    <div className = "user__field">
        <Comment
          author={<Link to={'/user/' + props.user.id}><p>{props.user.username}</p></Link>}
          avatar={
            <Link to={'/user/' + props.user.id}><Avatar
              src='./avatar.jpg'
              alt={props.user.username} /></Link>
          }    
          content={
          <p>{props.post.body}</p>
          } />
        <Collapse accordion onChange={() => dispatch(fetchComments(props.user.id))}>          
          <Panel header="Коментарии" key={props.user.id}>
          {comments.map(comment => <Comment
              key={comment.id}
              author={comment.email}
              avatar={'./avatar.jpg'}
              content={comment.name}
              datetime={moment().subtract(1, 'days').fromNow()}
            />)  
          }</Panel>
        </Collapse>
</div>     
  );
};



export default Posts;

