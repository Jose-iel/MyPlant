import styled, { css } from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

import Icon from 'react-native-vector-icons/AntDesign';


export const Container = styled.TouchableOpacity`
    width: 100%;
    height: ${RFValue(87)}px;

    margin-top: 18px;

    background-color: ${({ theme }) => theme.colors.white};

    border-left-width: 14px;
    border-left-color: ${({ theme }) => theme.colors.dark_gray};

    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Box = styled.View`
    padding: 7px 17px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(26)}px;

    color: ${({ theme }) => theme.colors.dark_gray};
`;

export const CreateDate = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(9)}px;

    color: ${({ theme }) => theme.colors.dark_green};

    margin-top: 5px;
`;

export const Flex = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const CalendarIcon = styled(Icon)`
    font-size: ${RFValue(11)}px;
    color: ${({ theme }) => theme.colors.dark_gray};
`;

export const TextDate = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(9)}px;

    color: ${({ theme }) => theme.colors.dark_gray};
`;

export const PpmTitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(10)}px;

    color: ${({ theme }) => theme.colors.dark_green};

    text-align: center;
    margin-top: 5px;
    margin-bottom: -5px;
`;

export const Ppm = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(20)}px;

    color: ${({ theme }) => theme.colors.dark_gray};
    text-align: center;
`;

export const TemperatureText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(10)}px;

    color: ${({ theme }) => theme.colors.dark_green};

    text-align: center;
    margin-bottom: -5px;
`;

export const Temperature= styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(20)}px;

    color: ${({ theme }) => theme.colors.dark_gray};

    text-align: center;
`;
