import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

import { TouchableOpacity } from 'react-native';

interface ButtonProps {
    type: string;
    title: string;
    selected: string;
}

export const Container = styled(TouchableOpacity)<ButtonProps>`
    width: 100px;
    height: 50px;

    border-width: 1px;
    border-style: solid;
    
    ${(props) => props.type === 'ALTA' && css`
        border-color: ${({theme}) => theme.colors.light_green}
    `};

    ${(props) => props.type === 'MEDIA' && css`
        border-color: ${({theme}) => theme.colors.orange}
    `};

    ${(props) => props.type === 'BAIXA' && css`
        border-color: ${({theme}) => theme.colors.warning}
    `};

    ${(props) => props.selected === 'ALTA' && props.title === 'ALTA' && css`
        border-width: 4px;
    `};

    ${(props) => props.selected === 'MEDIA' && props.title === 'MEDIA' && css`
        border-width: 4px;
    `};

    ${(props) => props.selected === 'BAIXA' && props.title === 'BAIXA' && css`
        border-width: 4px;
    `};
    
    border-radius: 6px;

    align-items: center;
    justify-content: center;
`;

export const Text = styled.Text<ButtonProps>`
    font-size: ${RFValue(20)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
    
    ${(props) => props.type === 'ALTA' && css`
        color: ${({theme}) => theme.colors.light_green}
    `};

    ${(props) => props.type === 'MEDIA' && css`
        color: ${({theme}) => theme.colors.orange}
    `};

    ${(props) => props.type === 'BAIXA' && css`
        color: ${({theme}) => theme.colors.warning}
    `};
`;