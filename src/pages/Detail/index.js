import React from 'react';
import { formatToTimeZone } from 'date-fns-timezone';
import pt from 'date-fns/locale/pt-BR';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconEvent from 'react-native-vector-icons/MaterialIcons';
import Ant from 'react-native-vector-icons/AntDesign';

import {
  Container,
  PreContainer,
  Entrega,
  Encomenda,
  InformacoesTitle,
  Situacao,
  Title,
  TextContent,
  Datas,
  DatasContainer,
  Buttons,
  Button,
  ButtonText,
} from './styles';

export default function Detail({ navigation, route }) {
  function handleConfirm({ navigation }) {}

  const { data } = route.params;

  function getStatus() {
    if (data.canceled_at) return 'CANCELADA';
    if (!data.start_date) return 'PENDENTE';
    if (data.start_date && !data.end_date) return 'RETIRADA';
    if (data.end_date) return 'ENTREGUE';
    return '';
  }

  const noDate = '--/--/----';

  return (
    <>
      <PreContainer />
      <Container>
        <Entrega>
          <Encomenda>
            <Icon name="truck" size={30} color="#7d40e7" />
            <InformacoesTitle>Informações da entrega</InformacoesTitle>
          </Encomenda>
          <Title>DESTINATARIO</Title>
          <TextContent>{data.recipient.name}</TextContent>
          <Title>ENDEREÇO DE ENTREGA</Title>
          <TextContent>{`${data.recipient.rua}, ${data.recipient.numero}, ${
            data.recipient.complemento ? `${data.recipient.complemento},` : ''
          }${data.recipient.cidade} - ${data.recipient.estado}, ${
            data.recipient.cep
          }`}</TextContent>
          <Title>PRODUTO</Title>
          <TextContent>{data.product}</TextContent>
        </Entrega>
        <Situacao>
          <Encomenda>
            <IconEvent name="event" size={30} color="#7d40e7" />
            <InformacoesTitle>Situação da entrega</InformacoesTitle>
          </Encomenda>
          <Title>STATUS</Title>
          <TextContent>{getStatus()}</TextContent>
          <Datas>
            <DatasContainer>
              <Title>DATA DE RETIRADA</Title>
              <TextContent>
                {data.start_date
                  ? formatToTimeZone(data.start_date, 'DD/MM/YYYY', {
                      timeZone: 'America/Sao_Paulo',
                      locale: pt,
                    })
                  : noDate}
              </TextContent>
            </DatasContainer>
            <DatasContainer>
              <Title>DATA DE ENTREGA</Title>
              <TextContent>
                {data.end_date
                  ? formatToTimeZone(data.end_date, 'DD/MM/YYYY', {
                      timeZone: 'America/Sao_Paulo',
                      locale: pt,
                    })
                  : noDate}
              </TextContent>
            </DatasContainer>
          </Datas>
        </Situacao>
        <Buttons>
          <Button
            borderright
            onPress={() =>
              navigation.navigate('Informar', { data: { id: data.id } })
            }
          >
            <Ant name="closecircleo" size={30} color="#E74040" />
            <ButtonText margtop="5px">Informar</ButtonText>
            <ButtonText>Problema</ButtonText>
          </Button>
          <Button
            onPress={() =>
              navigation.navigate('Visualizar', { data: { id: data.id } })
            }
          >
            <Ant name="infocirlceo" size={30} color="#E7BA40" />

            <ButtonText margtop="10px">Visualizar</ButtonText>
            <ButtonText>Problemas</ButtonText>
          </Button>

          <Button
            borderleft
            onPress={() => navigation.navigate('Confirmar', { data })}
          >
            <Ant name="checkcircleo" size={30} color="#7D40E7" />
            <ButtonText margtop="10px">Confirmar</ButtonText>
            <ButtonText>Entrega</ButtonText>
          </Button>
        </Buttons>
      </Container>
    </>
  );
}
