import React from 'react';
import './User.scss';
import { Comment, Avatar, Collapse } from 'antd';

const { Panel } = Collapse;

const text = `Bla bla bla`;

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
                  <p>{text}</p>
                </Panel>
              </Collapse>
      </div>    
  );
};

export default Users;

