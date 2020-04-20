import React, { useState, useEffect } from 'react';
import { formatToTimeZone } from 'date-fns-timezone';
import pt from 'date-fns/locale/pt-BR';
import api from '~/services/api';

import {
  Container,
  PreContainer,
  Problemas,
  Title,
  ProblemaBox,
  Problema,
  Data,
  List,
  Canvas,
  InputProblem,
  InputStyled,
  Submit,
  Form,
} from './styles';

export default function Visualizar({ navigation, route }) {
  const { data } = route.params;
  const { id } = data;

  return (
    <>
      <PreContainer />
      <Container>
        <Title />
        <Canvas>
          <ProblemaBox>
            <Form>
              <InputStyled
                icon="mail-outline"
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Inclua aqui o problema que ocorreu"
                returnKeyType="next"
                value={id}
                onChangeText={() => {}}
              />
            </Form>
          </ProblemaBox>
          <Submit onPress={() => {}}>Entrar no sistema</Submit>
        </Canvas>
      </Container>
    </>
  );
}
