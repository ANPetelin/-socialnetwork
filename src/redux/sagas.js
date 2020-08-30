import {takeEvery, put, call} from 'redux-saga/effects';
import { showLoader, hideLoader } from './actions';
import { REQUEST_POSTS, FETCH_POSTS, REQUEST_MESSAGE, FETCH_MESSAGE } from "./types";
import axios from 'axios';

export function* sagaWatcher() {
    yield takeEvery(REQUEST_POSTS, sagaPost)
    yield takeEvery(REQUEST_MESSAGE, sagaMesage)
}

function* sagaMesage(user) { 
    try {
        const payload = yield call(axiosUrl, `https://jsonplaceholder.typicode.com/comments?postId=${user.id}`);  
        console.log(payload)    
        yield put({type: FETCH_MESSAGE, payload: payload.data})
    } 
    catch {
        alert('Что то пошло не так');
    }
}

function* sagaPost() {   
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

async function axiosUrl (url) {
    return axios.get(url);    
}