import styled from 'styled-components/native';
import { lighten } from 'polished';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  /* background: #7d40e7; */
  background: ${lighten(0.2, '#7d40e7')};
`;
