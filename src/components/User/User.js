import React from 'react';
import {connect} from 'react-redux';
import './User.scss';
import { Avatar } from 'antd';

const User = (props) => {
    return (
        <div className = "container">
            <Avatar src="./logo192.png" />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        state: state
    }
}

// const mapDispatchToProps = dispatch => ({
//     createPost: newPost => dispatch(createPost(newPost))
//   })

export default connect(mapStateToProps, null)(User);