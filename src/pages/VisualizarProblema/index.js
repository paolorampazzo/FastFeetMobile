import React, { useState, useEffect } from 'react';
import { formatToTimeZone } from 'date-fns-timezone';
import pt from 'date-fns/locale/pt-BR';
import api from '~/services/api';

import {
  Container,
  PreContainer,
  Problemas,
  Title,
  ProblemaBox,
  Problema,
  Data,
  List,
  Canvas,
} from './styles';

export default function Visualizar({ navigation, route }) {
  const { data } = route.params;
  const { id } = data;
  const [problemas, setProblemas] = useState([]);

  useEffect(() => {
    async function loadProblems() {
      const request = `delivery/${id}/problems?all=true`;
      const response = await api.get(request);

      setProblemas(response.data);
    }

    loadProblems();
  }, []);

  return (
    <>
      <PreContainer />
      <Container>
        <Title>Encomenda {data.id}</Title>
        <Canvas>
          <Problemas>
            <List
              data={problemas}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item }) => (
                <ProblemaBox key={item.id}>
                  <Problema>{item.description}</Problema>
                  <Data>
                    {formatToTimeZone(item.createdAt, 'DD/MM/YYYY', {
                      timeZone: 'America/Sao_Paulo',
                      locale: pt,
                    })}
                  </Data>
                </ProblemaBox>
              )}
            />
          </Problemas>
        </Canvas>
      </Container>
    </>
  );
}
