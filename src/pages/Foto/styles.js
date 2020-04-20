import styled, { css } from 'styled-components/native';
import Button from '~/components/Button';

export const PreContainer = styled.SafeAreaView`
  background: #7d40e7;
  height: 100px;
  position: relative;
  width: 100%;
`;

export const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  width: 100%;
  position: absolute;
`;

export const TirarFoto = styled.View`
  background: #ffffff;
  flex: 1;
  flex-direction: column;

  height: 500px;
  align-self: center;
  margin: 20px auto 20px;
  width: 85%;
  border-radius: 4px;

  elevation: 5;
  padding-bottom: 20px;
`;

export const Logout = styled.View`
  margin: 20px auto 20px;
  width: 85%;
`;

export const LogoutButton = styled(Button)`
  background: #7d40e7;
`;
