import React, { useState, useEffect } from 'react';
import { RNCamera } from 'react-native-camera';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import api from '~/services/api';

import {
  Container,
  PreContainer,
  TirarFoto,
  Logout,
  LogoutButton,
} from './styles';

const takePicture = async function (camera, setUri) {
  const options = {
    quality: 0.5,
    base64: true,
    mute: true,
    pauseAfterCapture: true,
  };

  const data = await camera.takePictureAsync(options);

  setUri(data.uri);
};

export default function Detail({ navigation, route }) {
  const [uri, setUri] = useState('');
  const [send, setSend] = useState(false);

  let camera;

  function handleConfirm(camera) {
    camera.resumePreview();
    setSend(true);
  }

  async function sendPhoto() {
    const words = uri.split('/');
    const originalname = words[words.length - 1];
    const data = new FormData();

    data.append('originalname', originalname);

    const cleanData = uri.replace('file://', '');

    data.append('file', {
      uri: cleanData,
      type: 'image/jpeg',
      name: `${new Date().getTime()}.jpg`,
    });

    const header = new Headers();
    header.append('Client-Id', api.clientId);
    header.append('Content-Type', `multipart/form-data`);

    const response = await api.post('signatures', data, header);
    console.tron.log(response.data);

    const { id, url } = response.data;
  }

  useEffect(() => {
    if (uri && send) {
      setSend(false);
      sendPhoto();
    }
  }, [uri, send]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'black',
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    capture: {
      flex: 0,
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 15,
      paddingHorizontal: 20,
      alignSelf: 'center',
      margin: 20,
    },
  });

  const PendingView = () => (
    <View
      style={{
        flex: 1,
        backgroundColor: 'lightgreen',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Waiting</Text>
    </View>
  );

  const createTwoButtonAlert = (camera) =>
    Alert.alert(
      'Foto Tirada!',
      'Deseja enviar a foto ?',
      [
        {
          text: 'Cancel',
          onPress: () => camera.resumePreview(),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            handleConfirm(camera);
          },
        },
      ],
      { cancelable: false }
    );

  return (
    <>
      <PreContainer />
      <Container>
        <TirarFoto>
          <RNCamera
            ref={(ref) => (camera = ref)}
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            captureAudio={false}
            onPictureTaken={() => createTwoButtonAlert(camera)}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            androidRecordAudioPermissionOptions={{
              title: 'Permission to use audio recording',
              message: 'We need your permission to use your audio',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
          >
            {({ camera, status, recordAudioPermissionStatus }) => {
              if (status !== 'READY') return <PendingView />;
              return (
                <View
                  style={{
                    flex: 0,
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}
                >
                  <TouchableOpacity
                    onPress={() => takePicture(camera, setUri)}
                    style={styles.capture}
                  >
                    <Text style={{ fontSize: 14 }}> SNAP </Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          </RNCamera>
        </TirarFoto>

        <Logout>
          <LogoutButton
            onPress={() => {
              Alert.alert(
                'Tentei mil vezes, passei o domingo todo so fazendo isso, olhando em mil foruns, e nada de conseguir enviar a foto! '
              );
            }}
          >
            Enviar
          </LogoutButton>
        </Logout>
      </Container>
    </>
  );
}
