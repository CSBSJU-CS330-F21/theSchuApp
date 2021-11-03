import * as React from 'react';

import { View, Text, Button } from 'react-native';
import {Coffee} from '../components/Coffee'
import {Heading} from '../components/Heading'
export default function Home ({navigation}){

  return(
    <View>
      <Button
      title="Employee Login"
      onPress={() => navigation.push('LoginScreen')} />
      <Button
      title="Customer Menu"
      onPress={() => navigation.push('CustomerMenuScreen')} />
    </View>
  )
}
