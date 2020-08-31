import { fork } from 'redux-saga/effects';
import { REQUEST_POSTS, REQUEST_COMMENTS, REQUEST_USERS } from "../types";
import sagaComments from './sagaComments';
import sagaPosts from './sagaPosts';
import sagaUsers from './sagaUsers';

export default function* rootSaga(data) {
    switch(data.type) {
        case REQUEST_POSTS:
            return yield fork(sagaPosts);
        case REQUEST_COMMENTS:
            return yield fork(sagaComments, data.id);
        case REQUEST_USERS:
            return yield fork(sagaUsers);
        default:
            return
    }    
}