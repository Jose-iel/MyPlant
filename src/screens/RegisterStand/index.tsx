import React, { useState } from 'react';
import { Alert } from 'react-native';

import { QualityButton } from '../../components/Form/QualityButton';
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
  QualityText,
  Flex,
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

export function RegisterStand(){

    const navigation = useNavigation<NavigationProps>();

    const theme = useTheme();

    const [ name, setName ] = useState("");
    const [ plant, setPlant] = useState("");
    const [ plantingDate, setPlantingDate ] = useState(new Date());
    const [ reservatory, setReservatory ] = useState("");
    const [ harvest, setHarvest] = useState(new Date());
    const [ quality, setQuality ] = useState("");
    const [ numberOfplant, setNumberOfplant ] = useState("");

    async function handleCreateNewStand(){

        if(name === ""){
            Alert.alert("Nome da bancada é obrigatório");
            return;
        }

        if(plant === ""){
            Alert.alert("O tipo de planta é obrigatório");
            return;
        }

        if(numberOfplant === ""){
            Alert.alert("O número de plantas é obrigatório");
            return;
        }

        if(reservatory === ""){
            Alert.alert("O número do reservatório é obrigatório");
            return;
        }

        if(quality === ""){
            Alert.alert("A qualidade é obrigatório");
            return;
        }

        const datePlanting = Intl.DateTimeFormat('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit'
        }).format(new Date(plantingDate));


        const dateHarvest = Intl.DateTimeFormat('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit'
        }).format(new Date(harvest));

        const newStand = {
            id: String(uuid.v4()),
            title: name,
            plantName: plant,
            date: datePlanting,
            harvestDate: dateHarvest,
            quality: quality,
            reservatoryNumber: reservatory,
            numberOfplants: numberOfplant, 
            firstTransplant: "",
            secondTransplant: "",
            minerals: [],
            sprayed: []
        }

        try {
            const dataKey = '@myplant:stands';

            const data = await AsyncStorage.getItem(dataKey);
            const currentData = data ? JSON.parse(data) : [];

            const dataFormatted = [
                ...currentData,
                newStand
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
                        <Title>Criar nova bancada:</Title>
                        <ButtonGoBack onPress={handleGoBack}>
                            <Close name="closesquare"/>
                        </ButtonGoBack>
                    </BoxHeader>

                    <Input 
                        placeholder="Nome da bancada"
                        onChangeText={setName}
                    />

                    <Input 
                        placeholder="Planta"
                        onChangeText={setPlant}
                    />

                    <Input 
                        placeholder="Número de plantas na bancada"
                        onChangeText={setNumberOfplant}
                    />

                    <Input 
                        placeholder="Reservatório"
                        onChangeText={setReservatory}
                    />

                    <Label>Data do plantio:</Label>

                    <DateField
                        labelDate="Dia"
                        labelMonth="Mês"
                        labelYear="Ano"
                        onSubmit={setPlantingDate}
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

                    <Label>Prazo estimado da colheita:</Label>

                    <DateField
                        labelDate="Dia"
                        labelMonth="Mês"
                        labelYear="Ano"
                        onSubmit={setHarvest}
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

                    <QualityText>Qualidade da bancada:</QualityText>

                    <Flex>
                        <QualityButton 
                            title="ALTA"
                            type="ALTA"
                            selected={quality}
                            onPress={() => setQuality("ALTA")}
                        />

                        <QualityButton 
                            title="MEDIA"
                            type="MEDIA"
                            selected={quality}
                            onPress={() => setQuality("MEDIA")}
                        />

                        <QualityButton 
                            title="BAIXA"
                            type="BAIXA"
                            selected={quality}
                            onPress={() => setQuality("BAIXA")}
                        />
                            
                    </Flex>

                    <Button 
                        title="SALVAR"
                        onPress={handleCreateNewStand}
                    />
                </Scroll>
            </KeyBoardView>
        </Container>
    );
}