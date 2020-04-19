import styled from 'styled-components/native';

export const Container = styled.View`
  background: #ffffff;
  position: relative;
  width: 335px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
  margin-bottom: 20px;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px;
`;

export const HeaderText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #7d40e7;
  margin-left: 10px;
`;

export const Progress = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 30px;
`;

export const ProgressIcon = styled.View`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background: ${(props) => (props.completed ? '#7d40e7' : '#ffffff')};

  border: 1px solid #7d40e7;
  margin: 20px 0 10px 0px;
`;

export const ProgressBar = styled.View`
  width: 125px;
  border: 1px solid #7d40e7;
  margin: 20px 0 10px 0;
`;

export const ProgressText = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 12px;
  margin-bottom: 12px;
`;

export const Step = styled.View`
  width: 137px;
`;

export const StepText = styled.Text`
  font-size: 8px;
  color: #999999;
  width: 50px;
  text-align: center;
`;

export const Details = styled.View`
  background: #f8f9fd;
  position: relative;
  height: 64px;
  width: 100%;
  padding: 20px 0px 20px 10px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Detail = styled.View`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
`;
export const DetailHeader = styled.Text`
  font-size: 8px;
  font-weight: bold;
  color: #999999;
`;
export const Texto = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #444444;
`;
export const DetailsText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #7d40e7;
`;
