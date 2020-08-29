import React from 'react';
import {connect} from 'react-redux';
import './User.scss';
import { Comment, Avatar } from 'antd';

const User = () => {
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
                <p>
                Привет мир
                </p>
            } />
      </div>    
  );
};

const mapStateToProps = state => {
    return {
        state: state
    }
}

// const mapDispatchToProps = dispatch => ({
//     createPost: newPost => dispatch(createPost(newPost))
//   })

export default connect(mapStateToProps, null)(User);
