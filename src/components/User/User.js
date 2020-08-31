import React from 'react';
import './User.scss';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './User.scss';
import { Card, Avatar, Collapse } from 'antd';

const { Panel } = Collapse;

const Users = () => {    
  const users = useSelector(state => state.users.users);
  let { id } = useParams();
  let user = users.filter(u => u.id === +id)[0];
  return (
      <div className = "user__field">
        <Card title={user.name} style={{ width: 600 }}>
          <Avatar
              src='./avatar.jpg'
              alt={user.username} />
          <p>Псевдоним: {user.username}</p>
          <p>Телефон: {user.phone}</p>
          <p>Email: {user.email}</p>
          <p>Website: {user.website}</p>
          <Collapse accordion>
            <Panel header="Подробнее" key={'1'}> 
              <p>Адрес проживания:</p>
              <p>Город: {user.address.city}</p>
              <p>Удица: {user.address.street}</p>
              <p>Дом: {user.address.suite}</p>
              <p>Почтовый индекс: {user.address.zipcode}</p><hr/>
              <p>Место работы:</p>
              <p>Название организации: {user.company.name}</p>
              <p>Сфера дейтельности: {user.company.catchPhrase}</p>
              <p>Должность: {user.company.bs}</p>
            </Panel>
            </Collapse>
        </Card>
      </div>    
  );
};

export default Users;


