import { fork } from 'redux-saga/effects';
import sagaComments from './sagaComments';
import sagaPosts from './sagaPosts';
import sagaUsers from './sagaUsers';

export default function* rootSaga() {
    yield fork(sagaComments)
    yield fork(sagaPosts)
    yield fork(sagaUsers)
  }