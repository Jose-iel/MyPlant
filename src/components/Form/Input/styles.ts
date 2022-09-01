import styled from 'styled-components/native';
import { TextInput } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TextInput)`
    width: 100%;
    height: ${RFValue(45)}px;

    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 6px;    

    margin-bottom: 16px;
    padding-left: 16px;

    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.dark_gray};
`;