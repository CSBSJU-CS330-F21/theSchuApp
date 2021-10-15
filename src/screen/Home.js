import * as React from 'react';

import { View, Text, Button } from 'react-native';



export default ({navigation}) => (
    <><Button
    title="Employee Login"
    onPress={() => navigation.push('LoginScreen')} />
    <Button
      title="Customer Menu"
      onPress={() => navigation.push('CustomerMenuScreen')} /></>     
)