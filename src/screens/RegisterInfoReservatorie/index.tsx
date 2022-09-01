import React, { useState } from 'react';
import { Alert } from 'react-native';

import { Input } from '../../components/Form/Input';
import { Button } from '../../components/Form/Button';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNavigation, useRoute } from '@react-navigation/native';

import uuid from 'react-native-uuid';

import DateField from 'react-native-datefield';

import { useTheme } from 'styled-components';

import {
  Container,
  Title,
  BoxHeader,
  ButtonGoBack,
  Close,
  Label
} from './styles';
import { ReservatorieProps } from '../../components/ReservatorieCard';

type NavigationProps = {
    navigate:(screen:string, infoIdRes: {}) => void;
}

type RouteProps = {
    params: any;
    key: string; 
    name: string; 
    path?: string | undefined;
}


export function RegisterInfoReservatorie(){

    const navigation = useNavigation<NavigationProps>();

    const theme = useTheme();

    const route = useRoute<RouteProps>();
    const data = route.params.data;

    const [ date, setDate ] = useState(new Date());
    const [ ppm, setPpm ] = useState("");
    const [ temperature, setTemperature] = useState("");

    async function handleCreateNewStand(){

        const dataKey = '@myplant:reservatories';

        if(ppm === ""){
            Alert.alert("PPM é obrigatório");
            return;
        }

        if(temperature === ""){
            Alert.alert("Temperatura é obrigatório");
            return;
        }

        const createDate = Intl.DateTimeFormat('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit'
        }).format(new Date(date));

        const formattedHour = Intl.DateTimeFormat('pt-BR', {
            hour: '2-digit',
            minute: '2-digit'
        }).format(new Date())

        const newInfoRes = {  
            ppm: ppm,
            temperature: temperature,
            id: String(uuid.v4()),
            date: createDate,
            hour: formattedHour 
        }

        data.info.push(newInfoRes);

        try {
            const res = await AsyncStorage.getItem(dataKey);
            const currentData = res ? JSON.parse(res) : [];

            const removed = currentData.filter(function(el: ReservatorieProps) { 
                return el.id !== data.id; 
            });

            await AsyncStorage.setItem(dataKey, JSON.stringify(removed));
            
        } catch (error) {
            console.log(error);
            Alert.alert("Os dados não foram salvos");
        }

        try {
            
            const res = await AsyncStorage.getItem(dataKey);
            const currentData = res ? JSON.parse(res) : [];
            
            const dataFormatted = [
                ...currentData,
                data
            ]

            await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted));

            navigation.navigate('InformationReservatorie', {infoId: data.id});
            
        } catch (error) {
            console.log(error);
            Alert.alert("Os dados não foram salvos");
        }
    }

    function handleGoBack() {
        navigation.navigate('InformationReservatorie', {infoId: data.id});
    }

    return (
        <Container>
            <BoxHeader>
                <Title>Adicionar PPM e Temperatura:</Title>
                <ButtonGoBack onPress={handleGoBack}>
                    <Close name="closesquare"/>
                </ButtonGoBack>
            </BoxHeader>

            <Input 
                placeholder="PPM"
                onChangeText={setPpm}
            />

            <Input 
                placeholder="Temperatura"
                onChangeText={setTemperature}
            />

            <Label>Data:</Label>

            <DateField
                labelDate="Dia"
                labelMonth="Mês"
                labelYear="Ano"
                onSubmit={setDate}
                styleInput={{ 
                    fontSize: 15,
                    fontFamily: theme.fonts.bold,
                }}
                containerStyle={{ 
                    marginBottom: 15,
                    backgroundColor: theme.colors.white,
                    height: 50,
                    width: "100%",
                    paddingLeft: 20,
                    paddingRight: 20,
                    borderRadius: 6
                }}
            />

            <Button 
                title="SALVAR"
                onPress={handleCreateNewStand}
            />

        </Container>
    );
}