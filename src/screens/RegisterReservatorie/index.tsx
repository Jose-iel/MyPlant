import React, { useState } from 'react';
import { Alert } from 'react-native';

import { Input } from '../../components/Form/Input';
import { Button } from '../../components/Form/Button';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNavigation } from '@react-navigation/native';

import uuid from 'react-native-uuid';

import DateField from 'react-native-datefield';

import { useTheme } from 'styled-components';

import {
  Container,
  Title,
  BoxHeader,
  ButtonGoBack,
  Close,
  Label,
  Scroll,
  KeyBoardView
} from './styles';

type NavigationProps = {
    navigate:(screen:string) => void;
}

export function RegisterReservatorie(){

    const navigation = useNavigation<NavigationProps>();

    const theme = useTheme();

    const [ name, setName ] = useState("");
    const [ date, setDate ] = useState(new Date());
    const [ ppm, setPpm ] = useState("");
    const [ temperature, setTemperature] = useState("");

    async function handleCreateNewStand(){

        if(name === ""){
            Alert.alert("Nome da bancada é obrigatório");
            return;
        }

        if(ppm === ""){
            Alert.alert("O último PPM é obrigatório");
            return;
        }

        if(temperature === ""){
            Alert.alert("A última temperatura é obrigatório");
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

        const newReservatorie = {
            id: String(uuid.v4()),
            title: name,
            date: createDate,
            info: [
                {
                    ppm: ppm,
                    temperature: temperature,
                    id: String(uuid.v4()),
                    date: createDate,
                    hour: formattedHour
                }
            ]
        }

        try {
            const dataKey = '@myplant:reservatories';

            const data = await AsyncStorage.getItem(dataKey);
            const currentData = data ? JSON.parse(data) : [];

            const dataFormatted = [
                ...currentData,
                newReservatorie
            ]

            await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted));

            navigation.navigate('Home');
            
        } catch (error) {
            console.log(error);
            Alert.alert("Os dados não foram salvos");
        }
    }

    function handleGoBack() {
        navigation.navigate('Home');
    }

    return (
        <Container>
            <KeyBoardView>
                <Scroll>
                <BoxHeader>
                    <Title>Criar novo reservatório:</Title>
                    <ButtonGoBack onPress={handleGoBack}>
                        <Close name="closesquare"/>
                    </ButtonGoBack>
                </BoxHeader>

                <Input 
                    placeholder="Nome do reservatório"
                    onChangeText={setName}
                />

                <Input 
                    placeholder="Último PPM"
                    onChangeText={setPpm}
                />

                <Input 
                    placeholder="Última temperatura"
                    onChangeText={setTemperature}
                />

                <Label>Data de criação:</Label>

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
                </Scroll>
            </KeyBoardView>
        </Container>
    );
}