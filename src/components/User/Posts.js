import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments, fetchPosts, fetchUsers } from '../../redux/actions';
import './User.scss';
import { Comment, Avatar, Collapse, Spin  } from 'antd';
import moment from 'moment';

const { Panel } = Collapse;

const Posts = () => {
  const [openCommentsId, setOpenCommentsId] = useState(null)
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

  const clickOnComment = (id) => {
    openCommentsId === id ? setOpenCommentsId(null) : setOpenCommentsId(id)    
  }

  if (posts.length && users.length) {
    return (
      <div>
        {newPosts.map(post => {
            let user = users.filter(u => u.id === post.userId);
            return <div key = {post.id}>
                <ComponentUser user = {user[0]} post={post} 
                              id={openCommentsId} 
                              clickOnComment={clickOnComment.bind(this)}/>
          </div>})}
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
          author={<Link to={'/user/' + props.user.id}><p>{props.user.username}</p></Link>}
          avatar={
              <Avatar
              src='./avatar.jpg'
              alt={<Link to={'/user/' + props.user.id}>{props.user.username}</Link>} />
          }    
          content={
          <p>{props.post.body}</p>
          } />
        <Collapse accordion activeKey={[props.id]} onChange={() => {
          dispatch(fetchComments(props.user.id));
          props.clickOnComment(props.user.id)}}>
        <Panel header="Коментарии" key={props.user.id}>
          {comments.map(comment => {
            let match = props.user.id === comment.postId;
            return !match ? <Spin key={comment.id}/> :
          <Comment
              key={comment.id}
              author={comment.email}
              avatar={'./avatar.jpg'}
              content={comment.name}
              datetime={moment().subtract(1, 'days').fromNow()}
            />})  
          }</Panel>
        </Collapse>
</div>     
  );
};



export default Posts;

