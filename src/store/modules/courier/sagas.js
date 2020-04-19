import { Alert } from 'react-native';
import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '~/services/api';
import { signInSuccess, signInFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.get, `couriers/${id}`);

    const { name, email, avatar_id, createdAt } = response.data;
    const avatar_url = response.data.avatar ? response.data.avatar.url : null;

    const user = { id, name, email, avatar_id, createdAt, avatar_url };

    // api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(user));

    // history.push('/dashboard');
  } catch (err) {
    Alert.alert(
      'Falha na autenticacao',
      'Houve um erro no login, verifique seus dados'
    );
    yield put(signInFailure());
  }
}

export default all([takeLatest('@courier/SIGN_IN_MOBILE_REQUEST', signIn)]);
