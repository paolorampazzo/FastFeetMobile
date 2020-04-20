import styled from 'styled-components/native';

export const Container = styled.View`
  height: 45px;
  background: #ffffff
  border-radius: 4px;

  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#999999',
})`
  flex: 1;
  font-size: 16px;
  margin-left: 20px;
  color: #999999;
`;
