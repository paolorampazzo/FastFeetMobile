import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { View, Text, TouchableOpacity } from 'react-native';
import rc from 'randomcolor';

import { useIsFocused } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { signOut } from '~/store/modules/courier/actions';
import Handout from '~/components/Handout';

import api from '~/services/api';

import {
  Container,
  Header,
  Avatar,
  Title,
  Exit,
  Main,
  HeaderMain,
  EntregasSelect,
  EntregasTitulo,
  Pendentes,
  Entregues,
  List,
  Bemvindo,
  Entregador,
  AvatarArea,
  Photo,
  Initial,
} from './styles';

export default function Dashboard({ navigation }) {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  const [pendentes, setPendentes] = useState(true);
  const [entregues, setEntregues] = useState(false);
  const [entregas, setEntregas] = useState([]);
  const [reload, setReload] = useState(false);
  const [avatarSettings, setAvatarSettings] = useState({
    color: '#7D40E7',
    initials: ['F', 'F'],
  });
  const id = useSelector((state) => state.courier.id);
  const user = useSelector((state) => state.courier.user);

  function handlePendentes() {
    setPendentes(true);
    setEntregues(false);
  }

  function handleEntregues() {
    setEntregues(true);
    setPendentes(false);
  }

  function handleExit() {
    dispatch(signOut());
  }

  async function loadHandouts() {
    const request = `handouts/?deliveryman_id=${id}`;
    const response = await api.get(request);

    setEntregas(response.data);
    setReload(false);
  }

  useEffect(() => {
    if (isFocused) {
      loadHandouts();
    }
  }, [isFocused, reload]);

  useEffect(() => {
    if (user.name) {
      const initials = user.name.split(' ').map((word) => word[0]);

      const seed = initials.reduce(
        (total, value) => total * value.charCodeAt(),
        1
      );

      const colorAvatar = rc({ luminosity: 'dark', seed });
      setAvatarSettings({ color: colorAvatar, initials });
    }
  }, [user]);

  const address = '192.168.0.15'; // Hack pra acessar o backend do wifi
  return (
    <Container>
      <Header>
        <AvatarArea>
          <Avatar color={avatarSettings.color}>
            {user.avatar_url ? (
              <>
                <Photo
                  source={{
                    uri: user.avatar_url.replace('localhost', address),
                  }}
                />
              </>
            ) : (
              <Initial color={avatarSettings.color}>
                {avatarSettings.initials
                  .reduce((total, value) => total + value, '')
                  .substring(0, 2)}
              </Initial>
            )}
          </Avatar>
        </AvatarArea>
        <Title>
          <Bemvindo>Bem vindo de volta,</Bemvindo>
          <Entregador>{user.name}</Entregador>
        </Title>
        <Exit onPress={handleExit}>
          <Icon name="exit-to-app" size={40} color="#E74040" />
        </Exit>
      </Header>
      <Main>
        <HeaderMain>
          <EntregasTitulo>Entregas</EntregasTitulo>
          <EntregasSelect>
            <TouchableOpacity onPress={handlePendentes}>
              <Pendentes active={pendentes}>Pendentes</Pendentes>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleEntregues}>
              <Entregues active={entregues}>Entregues</Entregues>
            </TouchableOpacity>
          </EntregasSelect>
        </HeaderMain>
        <List
          data={
            entregues
              ? entregas.filter((item) => item.end_date)
              : entregas.filter((item) => !item.end_date)
          }
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Handout navigation={navigation} onCancel={() => {}} data={item} />
          )}
        />
      </Main>
    </Container>
  );
}
