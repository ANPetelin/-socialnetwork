import { takeEvery, } from 'redux-saga/effects';
import { REQUEST_POSTS, REQUEST_COMMENTS, REQUEST_USERS, } from "../types";
import rootSaga from './rootSaga';

export function* sagaWatcher() {
    yield takeEvery(REQUEST_POSTS, rootSaga)
    yield takeEvery(REQUEST_USERS, rootSaga)
    yield takeEvery(REQUEST_COMMENTS, rootSaga)    
}