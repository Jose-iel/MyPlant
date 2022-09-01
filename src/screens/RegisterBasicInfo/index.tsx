import React, { useState } from 'react';
import { Alert } from 'react-native';

import { QualityButton } from '../../components/Form/QualityButton';
import { Input } from '../../components/Form/Input';
import { Button } from '../../components/Form/Button';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNavigation, useRoute } from '@react-navigation/native';

import DateField from 'react-native-datefield';

import { useTheme } from 'styled-components';
import { CardInfoProps } from '../Info';

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
    navigate:(screen:string, infoId: {}) => void;
}

type RouteProps = {
    params: any;
    key: string; 
    name: string; 
    path?: string | undefined;
}

export function RegisterBasicInfo(){

    const navigation = useNavigation<NavigationProps>();

    const route = useRoute<RouteProps>();
    const data = route.params.data;

    const theme = useTheme();

    const [ firstTransplant, setFirstTransplant ] = useState(new Date());
    const [ secondTransplant, setSecondTransplant ] = useState(new Date());
    const [ harvest, setHarvest] = useState(new Date());
    const [ quality, setQuality ] = useState("");
    const [ numberOfplant, setNumberOfplant ] = useState("");

    async function handleCreateNewStand(){

        const dataKey = '@myplant:stands';

        if(quality === ""){
            Alert.alert("Qualidade é obrigatório");
            return;
        }
        if(numberOfplant === ""){
            Alert.alert("Número de plantas é obrigatório");
            return;
        }

        const dateFirstTransplant = Intl.DateTimeFormat('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit'
        }).format(new Date(firstTransplant));

        const dateSecondTransplant = Intl.DateTimeFormat('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit'
        }).format(new Date(secondTransplant));

        const dateHarvest = Intl.DateTimeFormat('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit'
        }).format(new Date(harvest));

        data.firstTransplant = dateFirstTransplant;
        data.secondTransplant = dateSecondTransplant;
        data.harvestDate = dateHarvest;
        data.quality = quality;
        data.numberOfplants = numberOfplant;

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
            <KeyBoardView>
                <Scroll>
                    <BoxHeader>
                        <Title>Informações básicas:</Title>
                        <ButtonGoBack onPress={handleGoBack}>
                            <Close name="closesquare"/>
                        </ButtonGoBack>
                    </BoxHeader>

                    <Input 
                        placeholder="Número de plantas na bancada"
                        onChangeText={setNumberOfplant}
                    />

                    <Label>Primeiro transplante:</Label>

                    <DateField
                        labelDate="Dia"
                        labelMonth="Mês"
                        labelYear="Ano"
                        onSubmit={setFirstTransplant}
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

                    <Label>Segundo transplante:</Label>

                    <DateField
                        labelDate="Dia"
                        labelMonth="Mês"
                        labelYear="Ano"
                        onSubmit={setSecondTransplant}
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