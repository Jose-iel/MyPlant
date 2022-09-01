import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

import Icon from 'react-native-vector-icons/AntDesign';
import IconSt from 'react-native-vector-icons/FontAwesome';
import IconTr from 'react-native-vector-icons/FontAwesome5';
import IconGp from 'react-native-vector-icons/Entypo';

interface TypeProps {
    type: 'plant' | 'transplant' | 'secondTransplant' | 'colheita';
}

export const Container = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
})`
    width: 100%;
`;

export const CardStyle = styled.View<TypeProps>`
    width: 100%;
    height: ${RFValue(71)}px;

    margin-top: 12px;

    background-color: ${({ theme }) => theme.colors.white};

    border-left-width: 14px;

    ${(props) => props.type === 'plant' && css`
        border-left-color: ${({ theme }) => theme.colors.light_green};
    `}

    ${(props) => props.type === 'transplant' && css`
        border-left-color: ${({ theme }) => theme.colors.blue};
    `}

    ${(props) => props.type === 'secondTransplant' && css`
        border-left-color: ${({ theme }) => theme.colors.warning};
    `}

    ${(props) => props.type === 'colheita' && css`
        border-left-color: ${({ theme }) => theme.colors.orange};
    `}

    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
`

export const Box = styled.View`
    padding: 21px;
`;

export const Text = styled.Text`
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.dark_gray};
`;

export const Quality = styled.Text`
    font-size: ${RFValue(24)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.light_green};
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

export const Title = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.dark_green};

    margin-bottom: 6px;
`;

export const Flex = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const CalendarIcon = styled(Icon)`
    font-size: ${RFValue(11)}px;
    color: ${({ theme }) => theme.colors.dark_gray};

    margin-right: 5px;
`;

export const TextDate = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(9)}px;

    color: ${({ theme }) => theme.colors.dark_gray};
`;

export const IconPlant = styled(IconSt)`
    padding-right: 12px;
    font-size: ${RFValue(30)}px;
    color: ${({ theme }) => theme.colors.light_green};
`;

export const IconTractor= styled(IconTr)`
    padding-right: 10px;
    font-size: ${RFValue(28)}px;
    color: ${({ theme }) => theme.colors.orange};
`;

export const IconSecondTransplant = styled(Icon)`
    padding-right: 12px;
    font-size: ${RFValue(30)}px;
    color: ${({ theme }) => theme.colors.warning};
`;

export const IconGrapic = styled(IconGp)`
    padding-right: 12px;
    font-size: ${RFValue(30)}px;
    color: ${({ theme }) => theme.colors.blue};
`;
