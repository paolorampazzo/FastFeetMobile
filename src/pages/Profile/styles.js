import styled, { css } from 'styled-components/native';
import { lighten } from 'polished';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #ffffff;
  flex-direction: column;

  padding: 30px;
`;

export const Avatar = styled.View`
  margin: 40px auto 50px;

  background: ${(props) => lighten(0.5, props.color)};
  width: 136px;
  height: 136px;
  border-radius: 88px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Initial = styled.Text`
  font-size: 48px;
  align-self: center;
  color: ${(props) => String(props.color)};
`;

export const Details = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 15px;
`;

export const Logout = styled.View``;
export const Title = styled.Text`
  font-size: 12px;
  color: #444444;
`;
export const Detail = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #444444;

  margin-bottom: 22px;
`;

export const Photo = styled.Image`
  width: 136px;
  height: 136px;
  border-radius: 88px;
`;

export const Form = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 0 },
})`
  align-self: stretch;
`;

export const LogoutButton = styled(Button)`
  margin-top: 10px;
  background: #e74040;
`;
