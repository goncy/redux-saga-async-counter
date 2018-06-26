import {delay} from "redux-saga";
import {put, take, call, fork} from "redux-saga/effects";

function* count() {
  yield put({type: "INCREASE"});
  yield call(delay, 1000);
  yield put({type: "DECREASE"});
}

function* counterWatcher() {
  while (yield take("INCREASE_ASYNC")) {
    yield fork(count);
  }
}

export default [counterWatcher];
