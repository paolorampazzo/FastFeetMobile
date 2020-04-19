import React from 'react';
import { useSelector } from 'react-redux';
// import { Container } from './styles';

import createRouter from './routes';

export default function App() {
  const signed = useSelector((state) => state.courier.signed);

  return createRouter(signed);
}
