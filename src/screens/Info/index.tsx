import React, { useCallback, useState } from 'react';
import { BasicInfo } from '../../components/BasicInfo';

import {useFocusEffect, useNavigation, useRoute} from '@react-navigation/native';

import { StandCardProps } from '../../components/StandCard';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { CardUniversal } from '../../components/CardUniversal';
import { Button } from '../../components/Form/Button';

import {
  Container,
  Title,
  SubTitle,
  Text,
  SelectMenu,
  ButtonInfo,
  ButtonMineral,
  ButtonSprayed,
  BoxHeader,
  ButtonGoBack,
  Close,
  ListCardsUniversal
} from './styles';

type RouteProps = {
  params: any;
  key: string; 
  name: string; 
  path?: string | undefined;
}

type NavigationProps = {
  navigate:(screen:string, data?:{}) => void;
}

export interface CardInfoProps extends StandCardProps {
  minerals: [];
  sprayed: [];
  firstTransplant: string;
  secondTransplant: string;
}

export function Info(){

  const dataKey = '@myplant:stands';

  const navigation = useNavigation<NavigationProps>();

  const [screen, setScreen] = useState('information');

  const route = useRoute<RouteProps>();
  const id = route.params.infoId;

  const [data, setData] = useState<CardInfoProps>({} as CardInfoProps);

  useFocusEffect(useCallback(() => {
    async function getStands(){
      const response = await AsyncStorage.getItem(dataKey);
      const stands = response ? JSON.parse(response) : [];

      const [ infoStand ] = stands.filter((item: CardInfoProps) => item.id === id);

      setData(infoStand);
    }
    getStands();
  },[]));

  function handleGoBack() {
    navigation.navigate('Home');
  }

  function handleCreateNewMineral(){
    navigation.navigate('RegisterMineral', {data: data})
  }

  function handleCreateNewSprayed(){
    navigation.navigate('RegisterSprayed', {data: data})
  }

  return (
    <Container>
        <BoxHeader>
          <Title>{data.title}</Title>
          <ButtonGoBack onPress={handleGoBack}>
              <Close name="closesquare"/>
          </ButtonGoBack>
        </BoxHeader>
        <SelectMenu>
            <ButtonInfo onPress={() => setScreen('information')}>
                <Text>INFORMAÇÕES</Text>
            </ButtonInfo>
            <ButtonMineral onPress={() => setScreen('minerals')}>
                <Text>MINERAIS</Text>
            </ButtonMineral>
            <ButtonSprayed onPress={() => setScreen('sprayed')}>
                <Text>PULVERIZADOS</Text>
            </ButtonSprayed>
        </SelectMenu>

        <SubTitle>
          {screen === "information" && "Informações básicas:"}
          {screen === "minerals" && "Minerais:"}
          {screen === "sprayed" && "Pulverizados:"}
        </SubTitle>

        {screen === 'information' && 
          <BasicInfo 
            data={data}
          />
        }
        {screen === 'minerals' &&
          <>
            <ListCardsUniversal 
              data={data.minerals.reverse()}
              keyExtractor={item => item.id}
              renderItem={({ item }) => <CardUniversal data={item} type="mineral"/>}
            />
            <Button 
                  title="ADICIONAR"
                  onPress={handleCreateNewMineral}
            />
          </>
        }
        {screen === 'sprayed' &&
          <>
            <ListCardsUniversal 
              data={data.sprayed.reverse()}
              keyExtractor={item => item.id}
              renderItem={({ item }) => <CardUniversal data={item} type="sprayed"/>}
            />
            <Button 
                  title="ADICIONAR"
                  onPress={handleCreateNewSprayed}
            />
          </>
        }
    </Container>
  );
}