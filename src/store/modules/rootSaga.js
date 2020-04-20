import { all } from 'redux-saga/effects';

import courier from './courier/sagas';
import foto from './foto/sagas';

export default function* rootSaga() {
  return yield all([courier, foto]);
}
