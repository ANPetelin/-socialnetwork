import React from 'react';
import './User.scss';
import { Comment, Avatar, Collapse } from 'antd';

const { Panel } = Collapse;

const Users = (props) => {
  return (
      <div className = "user__field">
          <Comment
            author={<p>{props.user.name}</p>}
            avatar={
                <Avatar
                src="./logo192.png"
                alt="Andrey"
                />
            }
            content={
                <Collapse accordion>
                <Panel header="Посты" key="1">
                  {props.user.data.map((data, index) => <div key = {index}><p>{data.title}</p><hr/></div>)}
                </Panel>
              </Collapse>
            } />
                <Collapse accordion>
                <Panel header="Коментарии" key="1">
                  {props.messages.map((message, index) => {
                    let match = props.user.data.some(s => s.id === message.postId);
                    if (match) {
                    return <div key = {index}><p>{index + 1} - {message.body}</p><hr/></div>
                    }
                    return null
                  })}
                </Panel>
              </Collapse>
      </div>    
  );
};

export default Users;




