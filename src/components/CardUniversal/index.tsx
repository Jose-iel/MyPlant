import React from 'react';

import {
  Container,
  Box,
  Title,
  Flex,
  CalendarIcon,
  TextDate,
  TextQuantity
} from './styles';

export interface MineralCardProps {
  id: string;
  title: string;
  date: string;
  quantity: string;
}

interface Props {
  data: MineralCardProps;
  type: 'mineral' | 'sprayed';
}

export function CardUniversal({data, type}: Props){

  return (
    <Container type={type}>
      <Box>
        <Title>{data.title}</Title>
        <Flex>
          <CalendarIcon name="calendar"/>
          <TextDate>{data.date}</TextDate>
        </Flex>
      </Box>
      <Box>
        <TextQuantity>{data.quantity}</TextQuantity>
      </Box>
    </Container>
  );
}