import {takeEvery, put, call} from 'redux-saga/effects';
import { showLoader, hideLoader } from './actions';
import { REQUEST_POSTS, FETCH_POSTS, REQUEST_COMMENTS, FETCH_COMMENTS, REQUEST_USERS, FETCH_USERS } from "./types";
import axios from 'axios';

export function* sagaWatcher() {
    yield takeEvery(REQUEST_POSTS, sagaPosts)
    yield takeEvery(REQUEST_USERS, sagaUsers)
    yield takeEvery(REQUEST_COMMENTS, sagaComments)    
}

function* sagaComments(post) { 
    try {
        const payload = yield call(axiosUrl, `https://jsonplaceholder.typicode.com/comments?postId=${post.id}`);  
        yield put({type: FETCH_COMMENTS, payload: payload.data})
    } 
    catch {
        alert('Что то пошло не так');
    }
}

function* sagaPosts() {   
    try {
        yield put(showLoader());
        const payload = yield call(axiosUrl, 'https://jsonplaceholder.typicode.com/posts');    
        yield put({type: FETCH_POSTS, payload: payload.data})
        yield put(hideLoader());
    } 
    catch {
        alert('Что то пошло не так');
    }
}

function* sagaUsers() {   
    try {
        yield put(showLoader());
        const payload = yield call(axiosUrl, 'https://jsonplaceholder.typicode.com/users');    
        yield put({type: FETCH_USERS, payload: payload.data})
        yield put(hideLoader());
    } 
    catch {
        alert('Что то пошло не так');
    }
}

async function axiosUrl (url) {
    return axios.get(url);    
}