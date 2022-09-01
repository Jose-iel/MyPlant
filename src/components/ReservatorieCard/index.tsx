import React from 'react';

import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Box,
  Title,
  CreateDate,
  Flex,
  CalendarIcon,
  TextDate,
  PpmTitle,
  Ppm,
  TemperatureText,
  Temperature
} from './styles';

type NavigationProps = {
  navigate:(screen:string, infoIdRes:Object) => void;
}

export interface ReservatorieProps {
  id: string;
  title: string;
  date: string;
  info: [
    {
      ppm: string, 
      temperature: string, 
      id: string,
      date: string,
      hour: string,
    }
  ];
}

interface Props {
  data: ReservatorieProps;
}

export function ReservatorieCard({data} : Props){ 

  const navigation = useNavigation<NavigationProps>();

  var lastInfo = data.info[data.info.length - 1];

  return (
    <Container onPress={() => navigation.navigate('InformationReservatorie', {infoIdRes: data.id})}>
        <Box>
            <PpmTitle>Reservatório:</PpmTitle>
            <Title>{data.title}</Title>
            <CreateDate>Data de criação:</CreateDate>
            <Flex>
                <CalendarIcon name="calendar"/>
                <TextDate>{data.date}</TextDate>
            </Flex>
        </Box>

        <Box>
            <PpmTitle>Último ppm:</PpmTitle>
            <Ppm>{lastInfo.ppm}</Ppm>

            <TemperatureText>Última temperatura:</TemperatureText>
            <Temperature>{lastInfo.temperature}ºC</Temperature>
        </Box>
    </Container>
  );
}