import styled from 'styled-components/native';
import { lighten } from 'polished';

export const Container = styled.SafeAreaView`
  background: #ffffff;
  flex: 1;
  padding: 30px 20px 12px 20px;
`;

// export const Title = styled.Text`
//   font-size: 20px;
//   color: #fff;
//   font-weight: bold;
//   align-self: center;
//   margin-top: 30px;
// `;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 80px;
`;
export const AvatarArea = styled.View`
  width: 68px;
  height: 100%;
`;

export const Avatar = styled.View`
  background: ${(props) => lighten(0.5, props.color)};
  width: 68px;
  height: 68px;
  border-radius: 34px;
  margin: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Initial = styled.Text`
  font-size: 31px;
  position: absolute;
  align-self: center;
  color: ${(props) => String(props.color)};
`;

export const Photo = styled.Image`
  width: 68px;
  height: 68px;
  border-radius: 34px;
`;

export const Title = styled.View`
  width: 225px;
  height: 100%;
`;

export const Bemvindo = styled.Text`
  font-size: 12px;
  color: #666666;
`;

export const Entregador = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #444444;
`;

export const Exit = styled.TouchableOpacity`
  height: 100%;
  width: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Main = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin: 30px auto;
`;

export const HeaderMain = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  margin-bottom: 20px;
`;

export const EntregasTitulo = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin: 0;
  color: #444444;
  align-self: baseline;
`;

export const EntregasSelect = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  align-self: baseline;
`;

export const Pendentes = styled.Text`
  font-size: 12px;
  font-weight: bold;
  margin-right: 15px;

  color: ${(props) => (props.active ? '#7D40E7' : '#999999')};
  text-decoration: ${(props) => (props.active ? 'underline' : 'none')};
`;

export const Entregues = styled.Text`
  font-size: 12px;
  font-weight: bold;

  color: ${(props) => (props.active ? '#7D40E7' : '#999999')};
  text-decoration: ${(props) => (props.active ? 'underline' : 'none')};
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingBottom: 80 },
})``;
