import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { Info } from "../screens/Info";
import { RegisterStand } from '../screens/RegisterStand';
import { RegisterMineral } from '../screens/RegisterMineral';
import { RegisterSprayed } from "../screens/RegisterSprayed";
import { RegisterBasicInfo } from "../screens/RegisterBasicInfo";
import { RegisterReservatorie } from "../screens/RegisterReservatorie";
import { InfoReservatorie } from "../screens/InfoReservatorie";
import { RegisterInfoReservatorie } from "../screens/RegisterInfoReservatorie";

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes(){
    return(
        <Navigator initialRouteName="Home" 
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen 
                name="Home"
                component={Home}
            />
            <Screen 
                name="Information"
                component={Info}
            />
            <Screen 
                name="InformationReservatorie"
                component={InfoReservatorie}
            />
            <Screen 
                name="Register"
                component={RegisterStand}
            />
            <Screen 
                name="RegisterReservatorie"
                component={RegisterReservatorie}
            />
            <Screen 
                name="RegisterInfoReservatorie"
                component={RegisterInfoReservatorie}
            />
            <Screen 
                name="RegisterMineral"
                component={RegisterMineral}
            />
            <Screen 
                name="RegisterSprayed"
                component={RegisterSprayed}
            />
            <Screen 
                name="RegisterBasicInfo"
                component={RegisterBasicInfo}
            />
        </Navigator>
    );
}