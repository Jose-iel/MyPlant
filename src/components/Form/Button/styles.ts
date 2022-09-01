import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TouchableOpacity)`
    width: 100%;
    height: 50px;

    background-color: ${({ theme }) => theme.colors.blue};

    border-radius: 6px;

    align-items: center;
    justify-content: center;

    margin-top: 24px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
    color: #ffff;
`;