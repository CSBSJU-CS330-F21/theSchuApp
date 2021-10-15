import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screen/Home';
import EmployeeHomeScreen from '../screen/EmployeeHomeScreen';
import LoginScreen from '../screen/LoginScreen';
import CustomerMenuScreen from '../screen/CustomerMenuScreen';

const SchuAppStack = createStackNavigator();
const SchuAppScreen = () =>(
<SchuAppStack.Navigator>
    <SchuAppStack.Screen name = "Home" component = {Home}/>
    <SchuAppStack.Screen name = "EmployeeHomeScreen" component = {EmployeeHomeScreen}/>
    <SchuAppStack.Screen name = "LoginScreen" component = {LoginScreen}/>
    <SchuAppStack.Screen name = "CustomerMenuScreen" component = {CustomerMenuScreen}/>
</SchuAppStack.Navigator>
);

export default () => (
    <NavigationContainer>
        <SchuAppScreen />
    </NavigationContainer>
)