import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Comment, Avatar, Collapse } from 'antd';
import moment from 'moment';
import { fetchComments } from '../redux/actions';
import './User.scss';

const { Panel } = Collapse;

export default (props) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.users.users.filter(user => user.id === props.post.userId))[0];
  const comments = useSelector(state => state.comments.comments.filter(comment => comment.postId === props.post.id));

  return (
    <div className = "user__field">
        <Comment
          author={<Link to={'/user/' + user.id}><p>{user.username}</p></Link>}
          avatar={
            <Link to={'/user/' +user.id}><Avatar
              src='./avatar.jpg'
              alt={user.username} /></Link>
          }    
          content={
          <p>{props.post.body}</p>
          } />
        <Collapse accordion onChange={() => dispatch(fetchComments(props.post.id))}>          
          <Panel header="Коментарии" key={user.id}>
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
