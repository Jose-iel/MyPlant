import React from 'react';
import { render } from '@testing-library/react-native';

import { StandCard } from '../../components/StandCard';


test('checking if component StandCard is showing its props', () => {
    const {debug} = render(<StandCard />)

    debug();
});