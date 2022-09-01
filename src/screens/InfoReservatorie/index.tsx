import React, { useCallback, useState } from 'react';

import {useFocusEffect, useNavigation, useRoute} from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from '../../components/Form/Button';

import {
  Container,
  Title,
  SubTitle,
  BoxHeader,
  ButtonGoBack,
  Close,
  ListInfoReservatorie,
  DeleteStand,
  DeliteText
} from './styles';
import { ReservatorieProps } from '../../components/ReservatorieCard';
import { CardInfoReservatorie } from '../../components/CardIndoReservatorie';
import { Alert } from 'react-native';

type RouteProps = {
  params: any;
  key: string; 
  name: string; 
  path?: string | undefined;
}

type NavigationProps = {
  navigate:(screen:string, data?:{}) => void;
}

interface InfoReservatorieProps {
  ppm: string;
  temperature: string;
  id: string;
  date: string;
  hour: string;
};

export function InfoReservatorie(){

  const dataKey = '@myplant:reservatories';

  const navigation = useNavigation<NavigationProps>();

  const route = useRoute<RouteProps>();
  const id = route.params.infoIdRes;

  const [data, setData] = useState<ReservatorieProps>({} as ReservatorieProps);
  const [arrayInfo, setArrayInfo] = useState<InfoReservatorieProps[]>([]);

  useFocusEffect(useCallback(() => {
    async function getStands(){
      const response = await AsyncStorage.getItem(dataKey);
      const stands = response ? JSON.parse(response) : [];

      const [ infoReservatorie ] = stands.filter((item: ReservatorieProps) => item.id === id);

      setData(infoReservatorie);
      
      if(infoReservatorie.info !== undefined){
        setArrayInfo(infoReservatorie.info.reverse());
      }
    }
    getStands();
  },[]));

  function handleGoBack() {
    navigation.navigate('Home');
  }

  function handleCreateNewSprayed(){
    navigation.navigate('RegisterInfoReservatorie', {data: data})
  }

  async function handleRemoveStand(){

    const response = await AsyncStorage.getItem(dataKey);
    const stands = response ? JSON.parse(response) : [];    

    const removed = stands.filter(function(el: ReservatorieProps) { 
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

  return (
    <Container>
        <BoxHeader>
          <Title>Reservatório: {data.title}</Title>
          <ButtonGoBack onPress={handleGoBack}>
              <Close name="closesquare"/>
          </ButtonGoBack>
        </BoxHeader>

        <SubTitle>Informações</SubTitle>

        <ListInfoReservatorie 
          data={arrayInfo}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <CardInfoReservatorie data={item}/>}
        />

        <Button 
              title="ADICIONAR"
              onPress={handleCreateNewSprayed}
        />
        <DeleteStand onPress={handleRemoveStand}><DeliteText>APAGAR RESERVATÓRIO</DeliteText></DeleteStand> 
    </Container>
  );
}