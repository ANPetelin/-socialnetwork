import { put, call } from 'redux-saga/effects';
import { showLoader, hideLoader } from '../actions';
import { FETCH_USERS } from "../types";
import requestData from './requestData';

export default function* () {   
    try {
        yield put(showLoader());
        const payload = yield call(requestData, 'https://jsonplaceholder.typicode.com/users');    
        yield put({type: FETCH_USERS, payload: payload.data})
        yield put(hideLoader());
    } 
    catch {
        alert('Что то пошло не так');
    }
}