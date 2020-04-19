import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import rc from 'randomcolor';
import { format, parseISO } from 'date-fns';

import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../store/modules/courier/actions';

import {
  Container,
  Avatar,
  Details,
  Logout,
  Title,
  Detail,
  Photo,
  Initial,
  LogoutButton,
  Form,
} from './styles';

export default function Profile() {
  const courier = useSelector((state) => state.courier.user);
  const [avatarSettings, setAvatarSettings] = useState({
    color: '#7D40E7',
    initials: ['F', 'F'],
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (courier.name) {
      const initials = courier.name.split(' ').map((word) => word[0]);

      const seed = initials.reduce(
        (total, value) => total * value.charCodeAt(),
        1
      );

      const colorAvatar = rc({ luminosity: 'dark', seed });
      setAvatarSettings({ color: colorAvatar, initials });
    }
  }, [courier]);

  function handleLogout() {
    console.tron.log('oi');
    dispatch(signOut());
  }

  const address = '192.168.0.15'; // Hack pra acessar o backend do wifi
  return (
    <Container>
      {courier.avatar_url ? (
        <>
          <Avatar color={avatarSettings.color}>
            <Photo
              source={{
                uri: courier.avatar_url.replace('localhost', address),
              }}
            />
          </Avatar>
        </>
      ) : (
        <Avatar color={avatarSettings.color}>
          <Initial color={avatarSettings.color}>
            {avatarSettings.initials
              .reduce((total, value) => total + value, '')
              .substring(0, 2)}
          </Initial>
        </Avatar>
      )}

      <Form>
        <Details>
          <Title>Nome Completo</Title>
          <Detail>{courier.name}</Detail>
          <Title>Email</Title>
          <Detail>{courier.email}</Detail>
          <Title>Data de cadastro</Title>
          <Detail>
            {format(parseISO(courier.createdAt), "dd'/'MM'/'yyyy")}
          </Detail>
        </Details>

        <Logout>
          <LogoutButton onPress={handleLogout}>Logout</LogoutButton>
        </Logout>
      </Form>
    </Container>
  );
}
