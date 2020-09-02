import React, {createElement, useState} from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Comment, Avatar, Collapse, Tooltip } from 'antd';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
import moment from 'moment';
import { fetchComments } from '../redux/actions';
import './Post.scss';

const { Panel } = Collapse;

export default (props) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.users.users.filter(user => user.id === props.post.userId))[0];
  const comments = useSelector(state => state.comments.comments.filter(comment => comment.postId === props.post.id));
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);

  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction('liked');
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction('disliked');
  };

  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
        <span className="comment-action">{dislikes}</span>
      </span>
    </Tooltip>,
    <span key="comment-basic-reply-to">Reply to</span>,
  ];

  return (
    <div className = "user__field">
        <Comment
          actions={actions}
          author={<Link to={'/user/' + user.id}><p>{user.username}</p></Link>}
          avatar={
            <Link to={'/user/' +user.id}><Avatar
              src='./avatar.jpg'
              alt={user.username} /></Link>
          }    
          content={
          <p>{props.post.body}</p>
          } />
        <Collapse className="comments" accordion expandIconPosition="right" onChange={() => dispatch(fetchComments(props.post.id))}>          
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
