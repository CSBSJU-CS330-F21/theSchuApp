import * as React from 'react';

import { View, Text, Button } from 'react-native';



<<<<<<< HEAD
export default ({navigation}) => (
    <><Button
    title="Employee Login"
    onPress={() => navigation.push('LoginScreen')} />
    <Button
      title="Customer Menu"
      onPress={() => navigation.push('CustomerMenuScreen')} /></>     
)
=======
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
>>>>>>> dalv001-firebase-db
