import React from 'react';
import './User.scss';
import { useParams } from 'react-router-dom';

const Users = () => {  
  let { id } = useParams();
  console.log(id)
  return (
      <div className = "user__field">
          <h1>User: {id}</h1>
      </div>    
  );
};

export default Users;


