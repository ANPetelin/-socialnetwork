import { CREATE_POST, FETCH_POSTS, SHOW_LOADER, HIDE_LOADER } from "./types";
import axios from 'axios';

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post
    }
}

export function fetchPosts() {
    return async dispatch => {
        dispatch({type: SHOW_LOADER})
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
        .then(res => {
            dispatch({type: HIDE_LOADER})
            dispatch({type: FETCH_POSTS, payload: res.data})
        })        
    }
}
