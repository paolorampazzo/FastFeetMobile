import { Alert } from 'react-native';
import { all, takeEvery, call, put } from 'redux-saga/effects';

import api from '~/services/api';
import { sendPhotoSuccess, sendPhotoFailure } from './actions';

export function* sendFile({ payload }) {
  try {
    const { uri } = payload;
    if (uri.length === 0) return;

    const formData = new FormData();
    formData.append('file', uri);

    const words = uri.split('/');
    const originalname = words[words.length - 1];

    formData.append('originalname', originalname);
    formData.append('enctype', 'multipart/form-data');

    const response = yield call(api.post, 'signatures', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    const { url, id } = response.data;
    console.tron.log(response.data);

    yield put(sendPhotoSuccess(id));
  } catch (err) {
    Alert.alert('Falha no envio', 'Houve um erro no envio do arquivo');
    yield put(sendPhotoFailure());
  }
}

export default all([takeEvery('@foto/SEND_REQUEST', sendFile)]);
