import React, { useState, useCallback } from 'react';

import { StandCard, StandCardProps } from '../../components/StandCard';

import { useFocusEffect } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNavigation } from '@react-navigation/native';

import { ReservatorieCard, ReservatorieProps } from '../../components/ReservatorieCard';

import {
  Container,
  ButtonCreate,
  IconMore,
  ListStand,
  ListReservatorie,
  SelectMenu,
  ButtonStand,
  ButtonReservatory,
  Text
} from './styles';

export interface DataListProps extends StandCardProps{
  id: string;
}

type NavigationProps = {
  navigate:(screen:string) => void;
}

export function Home(){

  const dataKey = '@myplant:stands';
  const dataKeyReservatorie = '@myplant:reservatories';

  const navigation = useNavigation<NavigationProps>();

  const [dataStands, setDataStands] = useState<DataListProps[]>([]);

  const [dataReservatories, setDataReservatories] = useState<ReservatorieProps[]>([]);

  const [screen, setScreen] = useState('Stands');

  function handleOpenModalRegister(){
    navigation.navigate('Register');
  }

  function handleOpenRegisterReservatory(){
    navigation.navigate('RegisterReservatorie');
  }

  useFocusEffect(useCallback(() => {
    async function getStands(){
      const responseStand = await AsyncStorage.getItem(dataKey);
      const stands = responseStand ? JSON.parse(responseStand) : [];

      setDataStands(stands);

      const responseReservatorie = await AsyncStorage.getItem(dataKeyReservatorie);
      const reservatories = responseReservatorie ? JSON.parse(responseReservatorie) : [];
      
      setDataReservatories(reservatories);
    }

    getStands();

  },[]));

  return (
    <Container>
      <SelectMenu>
        <ButtonStand onPress={() => setScreen('Stands')} type={screen}>
            <Text>BANCADAS</Text>
        </ButtonStand>
        <ButtonReservatory onPress={() => setScreen('Reservatories')} type={screen}>
            <Text>RESERVATÓRIOS</Text>
        </ButtonReservatory>
      </SelectMenu>

      {screen === 'Stands' && 
        <>
          <ListStand  
            data={dataStands}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <StandCard data={item}/>}
          />
          <ButtonCreate
            onPress={handleOpenModalRegister}
          >
            <IconMore name="pluscircle" />
          </ButtonCreate> 
        </>
      }

      {screen === 'Reservatories' &&
        <>
          <ListReservatorie
            data={dataReservatories}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <ReservatorieCard data={item}/>}
          />
          <ButtonCreate
            onPress={handleOpenRegisterReservatory}
          >
            <IconMore name="pluscircle" />
          </ButtonCreate> 
        </>
      }

        

    </Container>
  );
}