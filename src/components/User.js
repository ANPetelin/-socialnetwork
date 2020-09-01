import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, fetchUsers } from '../redux/actions';
import { Card, Collapse, Spin } from 'antd';
import './User.scss';

const { Panel } = Collapse;

const User = () => {    
  
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);
  let { id } = useParams();
  let user = users.filter(u => u.id === +id)[0];

  useEffect(() => {
    if (!users.length) {
      dispatch(fetchPosts());
      dispatch(fetchUsers())
    }    
  });

  return (
      <div>
        {!users.length ? <Spin/> : 
        <Card title={user.name} style={{ width: 600 }}>
          <p>Псевдоним: {user.username}</p>
          <p>Телефон: {user.phone}</p>
          <p>Email: <a href={'mailto:' + user.email}>{user.email}</a></p>
          <p>Website: <a href={`http://${user.website}`}>{user.website}</a></p>
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
        </Card>}
      </div>    
  );
};

export default User;


