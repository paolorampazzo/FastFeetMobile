import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native';
import {
  Container,
  HeaderText,
  Header,
  Progress,
  ProgressIcon,
  ProgressBar,
  ProgressText,
  StepText,
  Step,
  Details,
  Detail,
  DetailHeader,
  Texto,
  DetailsText,
} from './styles';

export default function Handout({ data }) {
  return (
    <Container>
      <Header>
        <Icon name="truck" size={30} color="#7d40e7" />
        <HeaderText>Encomenda {data}</HeaderText>
      </Header>
      <Progress>
        <ProgressIcon completed />
        <ProgressBar />

        <ProgressIcon />
        <ProgressBar />
        <ProgressIcon />
      </Progress>

      <ProgressText>
        <Step>
          <StepText>Aguardando retirada</StepText>
        </Step>
        <Step>
          <StepText>Retirada</StepText>
        </Step>
        <Step>
          <StepText>Entregue</StepText>
        </Step>
      </ProgressText>

      <Details>
        <Detail>
          <DetailHeader>Data</DetailHeader>
          <Texto>15/01/2020</Texto>
        </Detail>
        <Detail>
          <DetailHeader>Cidade</DetailHeader>
          <Texto>Aparecida</Texto>
        </Detail>
        <TouchableOpacity>
          <Detail>
            <DetailsText>Ver detalhes</DetailsText>
          </Detail>
        </TouchableOpacity>
      </Details>
    </Container>
  );
}
