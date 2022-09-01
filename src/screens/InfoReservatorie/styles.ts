import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

import Icon from 'react-native-vector-icons/AntDesign';

import { FlatList, FlatListProps } from 'react-native';

interface InfoReservatorieProps {
    ppm: string;
    temperature: string;
    id: string;
    date: string;
    hour: string;
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

    margin-top: 30px;

    width: 100%;
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

export const ListInfoReservatorie = styled(
    FlatList as new (props: FlatListProps<InfoReservatorieProps>) => FlatList<InfoReservatorieProps>
    ).attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        paddingBottom: 20
    }
})`
    width: 100%;
`;

export const DeleteStand = styled.TouchableOpacity`
    width: 100%;
    height: 44px;

    margin-top: 15px;

    border-radius: 6px;

    background-color: ${({ theme }) => theme.colors.warning};

    align-items: center;
    justify-content: center;
`;

export const DeliteText = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.white};
`;
