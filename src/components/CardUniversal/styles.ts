import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

import Icon from 'react-native-vector-icons/AntDesign';

interface ContainerProps{
    type: 'mineral' | 'sprayed';
}

export const Container = styled.View<ContainerProps>`
    width: 100%;

    margin-top: 12px;

    background-color: ${({ theme }) => theme.colors.white};

    border-left-width: 14px;

    ${(props) => props.type === 'mineral' && css`
        border-left-color: ${({ theme }) => theme.colors.orange};
    `}

    ${(props) => props.type === 'sprayed' && css`
        border-left-color: ${({ theme }) => theme.colors.blue};
    `}
    
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
`;

export const Box = styled.View`
    padding: 11px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.dark_green};

    margin-bottom: 11px;
`;

export const Flex = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const CalendarIcon = styled(Icon)`
    font-size: ${RFValue(18)}px;
    color: ${({ theme }) => theme.colors.dark_gray};

    margin-right: 8px;
`;

export const TextDate = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(16)}px;

    color: ${({ theme }) => theme.colors.dark_gray};
`;

export const TextQuantity = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(24)}px;

    color: ${({ theme }) => theme.colors.dark_green};
`;