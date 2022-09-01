import styled, { css } from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';

import Icon from 'react-native-vector-icons/AntDesign';

import { DataListProps } from '.'; 
import { ReservatorieProps } from '../../components/ReservatorieCard';

interface TypeProps {
    type: string;
}

export const Container = styled.View`
    flex: 1;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.background};

    padding: 26px 14px;
`;

export const ButtonCreate = styled.TouchableOpacity`
    position: absolute;

    bottom: ${RFValue(24)}px;
    right: ${RFValue(24)}px;

    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 50px;
`;

export const IconMore = styled(Icon)`
    font-size: ${RFValue(64)}px;
    color: ${({ theme }) => theme.colors.medium_green};
`;

export const ListStand = styled(
    FlatList as new (props: FlatListProps<DataListProps>) => FlatList<DataListProps>
    ).attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        paddingBottom: 20
    }
})`
    width: 100%;
`;

export const ListReservatorie = styled(
    FlatList as new (props: FlatListProps<ReservatorieProps>) => FlatList<ReservatorieProps>
    ).attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        paddingBottom: 20
    }
})`
    width: 100%;
`;

export const SelectMenu = styled.View`
    flex-direction: row;

    margin-top: 60px;
    margin-bottom: 32px;
`;

export const ButtonStand = styled.TouchableOpacity<TypeProps>`
    width: 50%;
    height: 36px;

    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.colors.light_gray};

    ${(props) => props.type === 'Stands' && css`
        background-color: ${({ theme }) => theme.colors.light_green};
    `}

    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
`;

export const ButtonReservatory = styled.TouchableOpacity<TypeProps>`
    width: 50%;
    height: 36px;

    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.colors.light_gray};

    ${(props) => props.type === 'Reservatories' && css`
        background-color: ${({ theme }) => theme.colors.dark_gray};
    `}

    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
`;

export const Text = styled.Text`
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.white};
`;