import React from 'react';

import {
  Container,
  Box,
  SubText,
  Label,
  TextInfos
} from './styles';

export interface ReservatorieIndoProps {
  id: string;
  ppm: string;
  temperature: string;
  date: string;
  hour: string;
}

interface Props {
  data: ReservatorieIndoProps;
}

export function CardInfoReservatorie({data}: Props){

  return (
    <Container>
      <Box>
        <Label>Data:</Label>
        <SubText>{data.date}</SubText>
        <Label>Hora:</Label>
        <SubText>{data.hour}</SubText>
      </Box>
      <Box>
        <Label>PPM:</Label>
        <TextInfos>{data.ppm}</TextInfos>
      </Box> 
      <Box>
        <Label>Temperatura:</Label>
        <TextInfos>{data.temperature}ºC</TextInfos>
      </Box>
    </Container>
  );
}