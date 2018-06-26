import {fork, all} from "redux-saga/effects";
import * as R from "ramda";

import counter from "./sagas/counter";

const flattenSagas = R.pipe(
  R.flatten,
  R.map(fork),
  all
);

const sagas = [counter];

export default function* rootSaga() {
  yield flattenSagas(sagas);
}
