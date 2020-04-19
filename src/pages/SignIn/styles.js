import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.View`
  margin-bottom: 37.5px;
`;
export const Form = styled.View`
  margin-top: 37.5px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputStyled = styled(Input)`
  margin-bottom: 16px;
  width: 80%;
`;
export const Submit = styled(Button)`
  width: 80%;
`;
