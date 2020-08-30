import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, Router } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessage } from '../../redux/actions';
import './User.scss';
import { Comment, Avatar, Collapse } from 'antd';

const history = require("history").createBrowserHistory();

const { Panel } = Collapse;

const Users = ({state}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let newPosts = [];
    for( let i = 0; i < 10; i++) {
      let index = Math.floor(Math.random() * 10) + i * 10;
      newPosts = [...newPosts, state.posts.fetchedPost[index]];
    }
    setPosts(newPosts);
  },[state.posts]);

  return (
      <div>
        {posts.map(post => <div key = {post.id}><ComponentUser post={post}/></div>)}
      </div>    
  );
};

const ComponentUser = (props) => {
  const dispatch = useDispatch();
  const messages = useSelector(state => state.message.message);
  return (
    <div className = "user__field">
      <Router history = {history}>
        <Comment
          author={<Link to={'/user/' + props.post.userId}><p>UserId: {props.post.userId}</p></Link>}
          avatar={
              <Avatar
              src="./logo192.png"
              alt={<Link to={'/user/' + props.post.userId}>{props.post.userId}</Link>}
              />
          }
          onClick = {() => window.location.reload()}      
          content={
          <p>{props.post.body}</p>
          } />
      </Router>
      <div onClick = {() => dispatch(fetchMessage())}>
        <Collapse accordion>
        <Panel header="Коментарии" key="1"></Panel>
        </Collapse>
      </div>     
      <button onClick = {() => console.log(messages)}>ekvh</button> 
</div>     
  );
};

const mapStateToProps = state => {
    return {
        state: state
    }
}

export default connect(mapStateToProps, null)(Users);


// {messages.map(message => {
//   let newMessage = message.filter((m) => m.postId == props.post.id);
//   return <h5 key={newMessage.id}>{newMessage.name}</h5>})}

// {messages.map(message => {
//   let newMessage = message.filter(m => m.postId === props.post.id);
//   return <h5>{newMessage.name}</h5>})}