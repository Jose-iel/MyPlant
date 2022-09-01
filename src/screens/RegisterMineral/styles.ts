import styled, { css } from 'styled-components/native';

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

import Icon from 'react-native-vector-icons/AntDesign';

export const Container = styled.View`
    flex: 1;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.background};

    padding: 26px 25px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(24)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.dark_green};
`;

export const BoxHeader = styled.View`
    width: 100%;

    margin-top: ${RFPercentage(6)}px;
    margin-bottom: 47px;

    flex-direction: row;
    align-items: center;

    justify-content: space-between;
`;

export const ButtonGoBack = styled.TouchableOpacity``;

export const Close = styled(Icon)`
    font-size: ${RFValue(26)}px;
    color: ${({ theme }) => theme.colors.warning};

    margin-top: 6px;
`

export const Label = styled.Text`
    width: 100%;
    margin-bottom: 5px;

    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.dark_gray};
`

