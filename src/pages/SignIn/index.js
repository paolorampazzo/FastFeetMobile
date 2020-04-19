import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Text, Image } from 'react-native';

import logo from '~/assets/fastfeet-logo.png';

import { signInRequest } from '../../store/modules/courier/actions';

import Background from '../../components/Background';

import { Container, Form, InputStyled, Submit } from './styles';

export default function SignIn({ navigation }) {
  const [id, setId] = useState('');
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.courier.loading);

  function handleSubmit() {
    dispatch(signInRequest(id));
  }

  return (
    <Background>
      <Container>
        <Image source={logo} width="auto" height="auto" />

        <Form>
          <InputStyled
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Informe seu ID de cadastro"
            returnKeyType="next"
            value={id}
            onChangeText={setId}
          />
          <Submit
            loading={loading}
            onPress={() => {
              handleSubmit();
            }}
          >
            Entrar no sistema
          </Submit>
        </Form>
      </Container>
    </Background>
  );
}
