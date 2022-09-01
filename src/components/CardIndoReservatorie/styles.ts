import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    width: 100%;

    margin-top: 12px;

    background-color: ${({ theme }) => theme.colors.white};

    border-color: ${({ theme }) => theme.colors.dark_gray};

    border-left-width: 14px;
    
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
`;

export const Box = styled.View`
    padding: 5px 14px;
`;

export const Label = styled.Text`
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.dark_green};
`;

export const SubText = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.dark_gray};
`;

export const TextInfos = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(32)}px;

    color: ${({ theme }) => theme.colors.dark_gray};
`;