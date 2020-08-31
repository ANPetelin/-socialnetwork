import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Comment, Avatar, Collapse } from 'antd';
import moment from 'moment';
import { fetchComments } from '../../redux/actions';
import './User.scss';

const { Panel } = Collapse;

export default (props) => {
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
