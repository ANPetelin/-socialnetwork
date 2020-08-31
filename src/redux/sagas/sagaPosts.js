import { put, call } from 'redux-saga/effects';
import { showLoader, hideLoader } from '../actions';
import { FETCH_POSTS } from "../types";
import requestData from './requestData';

export default function* () {   
    try {
        yield put(showLoader());
        const payload = yield call(requestData, 'https://jsonplaceholder.typicode.com/posts');    
        yield put({type: FETCH_POSTS, payload: payload.data})
        yield put(hideLoader());
    } 
    catch {
        alert('Что то пошло не так');
    }
}
