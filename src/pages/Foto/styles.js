import styled, { css } from 'styled-components/native';

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

export const Entrega = styled.View`
  background: #ffffff;
  flex: 1;
  flex-direction: column;

  min-height: 250px;
  align-self: center;
  margin: 20px auto 20px;
  width: 90%;
  border-radius: 4px;

  elevation: 5;
  padding-bottom: 20px;
`;

export const Encomenda = styled.View`
  position: relative;
  flex-direction: row;
  padding: 20px 20px 0px 20px;
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
  font-size: 14px;
  margin-top: 10px;
  color: #999999;
`;
export const TextContent = styled.Text`
  margin-left: 25px;
  font-size: 14px;
  color: #666666;
  margin-top: 5px;
`;

export const Situacao = styled.View`
  background: #ffffff;
  flex: 1;
  flex-direction: column;

  min-height: 200px;
  align-self: center;
  margin: 2px auto;
  width: 90%;
  border-radius: 4px;

  elevation: 5;
  padding-bottom: 20px;
`;

export const Datas = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-right: 15px;
`;

export const DatasContainer = styled.View``;

export const Buttons = styled.View`
  background: #f8f9fd;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;

  height: 100px;
  align-self: center;
  margin: 20px auto;
  width: 90%;
  border-radius: 4px;

  elevation: 5;
`;

export const Button = styled.TouchableOpacity`
  width: 33.33%;
  border-right-color: #000000;
  border-left-color: #000000;
  border-right-width: ${(props) => (props.borderright ? css`0.2px` : css`0`)};
  border-left-width: ${(props) => (props.borderleft ? css`0.2px` : css`0`)};

  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  align-self: center;
  text-align: center;
  margin-top: ${(props) => (props.margtop ? props.margtop : 0)}
  font-size: 12px;
  color: #999999;
`;
