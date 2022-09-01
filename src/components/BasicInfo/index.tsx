import React from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { CardInfoProps } from '../../screens/Info';

import {
  Container,
  CardStyle,
  Box,
  Text,
  Quality,
  Title,
  Flex,
  CalendarIcon,
  TextDate,
  IconPlant,
  IconGrapic,
  IconSecondTransplant,
  IconTractor,
  DeleteStand,
  DeliteText
} from './styles';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../Form/Button';

interface Props {
    data: CardInfoProps
}

type NavigationProps = {
    navigate:(screen:string, data?:{}) => void;
}

export function BasicInfo({data}: Props){

    const dataKey = '@myplant:stands';

    const navigation = useNavigation<NavigationProps>();

    async function handleRemoveStand(){

        const response = await AsyncStorage.getItem(dataKey);
        const stands = response ? JSON.parse(response) : [];    

        const removed = stands.filter(function(el: CardInfoProps) { 
            return el.id !== data.id; 
        });

        try {
            await AsyncStorage.setItem(dataKey, JSON.stringify(removed));

            navigation.navigate('Home');
            
        } catch (error) {
            console.log(error);
            Alert.alert("Os dados não foram salvos");
        }

    };

    function handleEditBasicInfo(){
        navigation.navigate('RegisterBasicInfo', {data: data})
    }

    return (
    <Container>
        <CardStyle type="plant">
            <Box>
                <Title>{data.title}</Title>
                <Text>Plantas na bancada: {data.numberOfplants}</Text>
            </Box>
            <Box>
                <Text>Qualidade:</Text>
                <Quality>{data.quality}</Quality>
            </Box>
        </CardStyle>

        <CardStyle type="plant">
            <Box>
                <Title>Semeação</Title>
                <Flex>
                    <CalendarIcon name="calendar"/>
                    <TextDate>{data.date}</TextDate>
                </Flex>
            </Box>
            <Box>
                <IconPlant name="leaf"/>
            </Box>
        </CardStyle>

        <CardStyle type="transplant">
            <Box>
                <Title>Primeiro transplante</Title>
                <Flex>
                    <CalendarIcon name="calendar"/>
                    <TextDate>{data.firstTransplant}</TextDate>
                </Flex>
            </Box>
            <Box>
                <IconGrapic name="line-graph"/>
            </Box>
        </CardStyle>

        <CardStyle type="secondTransplant">
            <Box>
                <Title>Segundo transplante</Title>
                <Flex>
                    <CalendarIcon name="calendar"/>
                    <TextDate>{data.secondTransplant}</TextDate>
                </Flex>
            </Box>
            <Box>
                <IconSecondTransplant name="menu-unfold"/>
            </Box>
        </CardStyle>

        <CardStyle type="colheita">
            <Box>
                <Title>Colheita</Title>
                <Flex>
                    <CalendarIcon name="calendar"/>
                    <TextDate>{data.harvestDate}</TextDate>
                </Flex>
            </Box>
            <Box>
                <IconTractor name="tractor"/>
            </Box>
        </CardStyle>
        
        <Button onPress={handleEditBasicInfo} title="EDITAR INFORMAÇÕES"/>
        <DeleteStand onPress={handleRemoveStand}><DeliteText>APAGAR BANCADA</DeliteText></DeleteStand> 
    </Container>
    );
}