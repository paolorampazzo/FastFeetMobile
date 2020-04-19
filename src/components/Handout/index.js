import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import { formatToTimeZone } from 'date-fns-timezone';
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

export default function Handout({ data, navigation, route }) {
  const retirada = !!data.start_date;
  const entregue = !!data.end_date;

  return (
    <Container>
      <Header>
        <Icon name="truck" size={30} color="#7d40e7" />
        <HeaderText>Encomenda {data.id}</HeaderText>
      </Header>
      <Progress>
        <ProgressIcon completed />
        <ProgressBar />

        <ProgressIcon completed={retirada} />
        <ProgressBar />
        <ProgressIcon completed={entregue} />
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
          <Texto>
            {formatToTimeZone(data.start_date, 'DD/MM/YYYY', {
              timeZone: 'America/Sao_Paulo',
              locale: pt,
            })}
          </Texto>
        </Detail>
        <Detail>
          <DetailHeader>Cidade</DetailHeader>
          <Texto>{data.recipient.cidade}</Texto>
        </Detail>
        <TouchableOpacity
          onPress={() => navigation.navigate('Detail', { data })}
        >
          <Detail>
            <DetailsText>Ver detalhes</DetailsText>
          </Detail>
        </TouchableOpacity>
      </Details>
    </Container>
  );
}
