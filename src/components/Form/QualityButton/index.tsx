import React from 'react';

import { TouchableOpacityProps } from 'react-native';

import {
  Container,
  Text
} from './styles';

interface Props extends TouchableOpacityProps{
    title: string;
    type: string;
    selected: string;
}

export function QualityButton({ title, type, selected, ...rest} : Props){
    return (
        <Container type={type} title={title} selected={selected} {...rest}>
            <Text type={type} title={title} selected={selected}>
                {title}
            </Text>
        </Container>
    );
}