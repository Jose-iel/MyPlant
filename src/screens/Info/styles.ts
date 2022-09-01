import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

import Icon from 'react-native-vector-icons/AntDesign';

import { FlatList, FlatListProps } from 'react-native';

interface CardsUniversalProps {
    id: string;
    title: string;
    quantity: string;
    date: string;
};


export const Container = styled.View`
    flex: 1;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.background};

    padding: 26px 14px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(24)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.dark_green};
`;

export const SubTitle = styled.Text`
    font-size: ${RFValue(24)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.dark_green};

    text-align: left;

    width: 100%;
`;

export const Text = styled.Text`
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.white};
`;

export const SelectMenu = styled.View`
    flex-direction: row;

    margin-top: 35px;
    margin-bottom: 32px;
`;

export const ButtonInfo = styled.TouchableOpacity`
    width: 33%;
    height: 36px;

    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.colors.light_green};

    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
`;

export const ButtonMineral = styled.TouchableOpacity`
    width: 33%;
    height: 36px;

    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.colors.orange};
`;

export const ButtonSprayed = styled.TouchableOpacity`
    width: 33%;
    height: 36px;

    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.colors.blue};

    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
`;

export const BoxHeader = styled.View`
    width: 100%;

    margin-top: ${RFPercentage(6)}px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const ButtonGoBack = styled.TouchableOpacity``;

export const Close = styled(Icon)`
    font-size: ${RFValue(26)}px;
    color: ${({ theme }) => theme.colors.warning};

    margin-top: 6px;
`;

export const ListCardsUniversal = styled(
    FlatList as new (props: FlatListProps<CardsUniversalProps>) => FlatList<CardsUniversalProps>
    ).attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        paddingBottom: 20
    }
})`
    width: 100%;
`;
