import styled, { css } from 'styled-components/native';

export const Canvas = styled.View`
  height: auto;
`;
export const PreContainer = styled.SafeAreaView`
  background: #7d40e7;
  height: 100px;
  position: relative;
  width: 100%;
`;

export const ProblemaBox = styled.View`
  background: #ffffff;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  align-self: center;

  border-radius: 4px;
  height: 70px;
  width: 100%;
  elevation: 5;
  margin-top: 20px;
  padding-bottom: 20px;
`;

export const Problema = styled.Text`
  color: #999999;
  font-size: 16px;
  margin-left: 15px;
`;
export const Data = styled.Text`
color: #C1C1C1
font-size: 12px;
margin-right: 15px;
`;

export const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  position: absolute;
  align-self: center;
  width: 85%;

  margin: 0 20px;
`;

export const Problemas = styled.View`
  position: relative;
  flex-direction: column;
`;

export const InformacoesTitle = styled.Text`
  color: #7d40e7;
  font-size: 14px;
  font-weight: bold;
  margin-left: 10px;
  align-self: center;
`;

export const Title = styled.Text`
  margin-left: 25px;
  font-size: 18px;
  margin-top: 10px;
  font-weight: bold;
  color: #ffffff;
  align-self: center;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingBottom: 80 },
})``;
