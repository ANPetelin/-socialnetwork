import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments, fetchPosts } from '../../redux/actions';
import './User.scss';
import { Comment, Avatar, Collapse, Spin  } from 'antd';
import moment from 'moment';

const { Panel } = Collapse;

const Posts = () => {
  const [openCommentsId, setOpenCommentsId] = useState(null)
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.fetchedPost);

  useEffect(() => {
    dispatch(fetchPosts());
  },[dispatch]);
  
  let newPosts = [];
  for( let i = 0; i < 10; i++) {
    let index = Math.floor(Math.random() * 10) + i * 10;
    newPosts = [...newPosts, posts[index]];
  }

  const clickOnComment = (id) => {
    setOpenCommentsId(id)
  }

  if (posts.length) {
    return (
      <div>
        {newPosts.map(post => <div key = {post.id}><ComponentUser post={post} id={openCommentsId} clickOnComment={clickOnComment.bind(this)}/></div>)}
      </div>    
  );}  

  else return <Spin/>
};

const ComponentUser = (props) => {
  const dispatch = useDispatch();
  const comments = useSelector(state => state.comments.comments);
  return (
    <div className = "user__field">
        <Comment
          author={<Link to={'/user/' + props.post.userId}><p>UserId: {props.post.userId}</p></Link>}
          avatar={
              <Avatar
              src='./avatar.jpg'
              alt={<Link to={'/user/' + props.post.userId}>{props.post.userId}</Link>}
              />
          }    
          content={
          <p>{props.post.body}</p>
          } />
        <Collapse accordion defaultActiveKey={[props.id]} onChange={() => {
          dispatch(fetchComments(props.post.userId));
          props.clickOnComment(props.post.userId)}}>
        <Panel header="Коментарии" key={props.post.userId}>
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

