import React from 'react';
import {connect} from 'react-redux';

const Posts = ({myPosts}) => {
    if(!myPosts.length) {
        return <p>Добавьте новые посты</p>
    }
    return myPosts.map(post => <h5 key={post.id}>{post.title}</h5>)
}

const mapStateToProps = state => {
    return {
        myPosts: state.posts.posts
    }
}

export default connect(mapStateToProps, null)(Posts);
