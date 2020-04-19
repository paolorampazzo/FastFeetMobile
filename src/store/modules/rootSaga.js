import { all } from 'redux-saga/effects';

import courier from './courier/sagas';

export default function* rootSaga() {
  return yield all([courier]);
}
