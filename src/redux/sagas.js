import {takeEvery, put, call} from 'redux-saga/effects';
import { showLoader, hideLoader } from './actions';
import { REQUEST_POSTS, FETCH_POSTS } from "./types";
import axios from 'axios';

export function* sagaWatcher() {
    yield takeEvery(REQUEST_POSTS, sagaWorker)
}

function* sagaWorker() {   
    try {
        yield put(showLoader());
        const payload = yield call(fetchPosts);    
        yield put({type: FETCH_POSTS, payload: payload.data})
        yield put(hideLoader());
    } 
    catch {
        alert('Что то пошло не так');
    }
}

async function fetchPosts () {
    return axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5');    
}