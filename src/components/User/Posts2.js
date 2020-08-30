import React from 'react';
import './User.scss';
import { Comment, Avatar, Collapse } from 'antd';

const { Panel } = Collapse;

const Posts = () => {
  return (
      <div className = "user__field">
          <Comment
            author={<p>Andrey</p>}
            avatar={
                <Avatar
                src="./logo192.png"
                alt="Andrey"
                />
            }
            content={
                <Collapse accordion>
                <Panel header="Посты" key="1">
                </Panel>
              </Collapse>
            } />
                <Collapse accordion>
                <Panel header="Коментарии" key="1">
                </Panel>
              </Collapse>
      </div>    
  );
};

export default Posts;
