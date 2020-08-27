import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { fetchPosts } from '../redux/actions';

export default () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.fetchedPost);
    const loading = useSelector(state => state.app.loading);
    if(loading) {
        return <p>Загрузка</p>
    }
    if(!posts.length) {
        return <button 
            onClick = {() => dispatch(fetchPosts())}>Загрузить посты</button>
    }
    return posts.map(post => <h5 key={post.id}>{post.title}</h5>)
}
