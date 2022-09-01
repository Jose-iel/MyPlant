import React, { useState } from 'react';
import { Alert } from 'react-native';

import { Input } from '../../components/Form/Input';
import { Button } from '../../components/Form/Button';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNavigation, useRoute } from '@react-navigation/native';

import uuid from 'react-native-uuid';

import DateField from 'react-native-datefield';

import { useTheme } from 'styled-components';
import { CardInfoProps } from '../Info';

import {
  Container,
  Title,
  BoxHeader,
  ButtonGoBack,
  Close,
  Label
} from './styles';

type NavigationProps = {
    navigate:(screen:string, infoId: {}) => void;
}

type RouteProps = {
    params: any;
    key: string; 
    name: string; 
    path?: string | undefined;
}

export function RegisterMineral(){

    const navigation = useNavigation<NavigationProps>();

    const route = useRoute<RouteProps>();
    const data = route.params.data;

    const theme = useTheme();

    const [ title, setTitle ] = useState("");
    const [ date, setDate ] = useState(new Date());
    const [ quantity, setQuantity ] = useState("");

    async function handleCreateNewStand(){

        const dataKey = '@myplant:stands';

        if(title === ""){
            Alert.alert("Nome do mineral é obrigatório");
            return;
        }

        if(quantity === ""){
            Alert.alert("Quantidade aplicada é obrigatório");
            return;
        }

        const dateMineral = Intl.DateTimeFormat('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit'
        }).format(new Date(date));

        const newMineral = {
            title: title,
            quantity: quantity,
            date: dateMineral,
            id: String(uuid.v4())
        }

        data.minerals.push(newMineral);

        try {
            const res = await AsyncStorage.getItem(dataKey);
            const currentData = res ? JSON.parse(res) : [];

            const removed = currentData.filter(function(el: CardInfoProps) { 
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

            navigation.navigate('Information', {infoId: data.id});
            
        } catch (error) {
            console.log(error);
            Alert.alert("Os dados não foram salvos");
        }
    }

    function handleGoBack() {
        navigation.navigate('Information', {infoId: data.id});
    }

    return (
        <Container>
            <BoxHeader>
                <Title>Adicionar Mineral:</Title>
                <ButtonGoBack onPress={handleGoBack}>
                    <Close name="closesquare"/>
                </ButtonGoBack>
            </BoxHeader>

            <Input 
                placeholder="Nome do mineral"
                onChangeText={setTitle}
            />

            <Input 
                placeholder="Quantidade aplicada"
                onChangeText={setQuantity}
            />

            <Label>Data da aplicação:</Label>

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