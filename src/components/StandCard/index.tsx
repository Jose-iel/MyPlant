import React from 'react';

import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Box,
  Title,
  PlantName,
  PlantingDate,
  Flex,
  CalendarIcon,
  TextDate,
  PlantQuality,
  Quality,
  Reservatory,
  ReservatoryNumber
} from './styles';

type NavigationProps = {
  navigate:(screen:string, infoId:Object) => void;
}

export interface StandCardProps {
  id: string;
  title: string;
  plantName: string;
  numberOfplants: string;
  date: string;
  harvestDate: string;
  quality: 'ALTA' | 'MEDIA' | 'BAIXA';
  reservatoryNumber: string;
}

interface Props {
  data: StandCardProps;
}

export function StandCard({data} : Props){

  const navigation = useNavigation<NavigationProps>();

  return (
    <Container onPress={() => navigation.navigate('Information', {infoId: data.id})}>
        <Box>
            <Title>{data.title}</Title>
            <PlantName>{data.plantName}</PlantName>
            <PlantingDate>Data do plantio:</PlantingDate>
            <Flex>
                <CalendarIcon name="calendar"/>
                <TextDate>{data.date}</TextDate>
            </Flex>
        </Box>

        <Box>
            <PlantQuality>Qualidade da planta</PlantQuality>
            <Quality type={data.quality}>{data.quality}</Quality>

            <Reservatory>Reservatório</Reservatory>
            <ReservatoryNumber>{data.reservatoryNumber}</ReservatoryNumber>
        </Box>
    </Container>
  );
}