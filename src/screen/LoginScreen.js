
import React, { useState } from "react";

import {View, StyleSheet, Text, Button} from 'react-native';
import { FilledButton } from '../components/FilledButton';
import {Input} from '../components/Input';
import {Error} from '../components/Error';



export default function LoginScreen({ navigation }) {
  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <><Input
      style={styles.input}
      placeholder={'Username (username)'}
      onChangeText={(username) => setEmail(username)} /><Input
        style={styles.input}
        placeholder={'Password (password)'} secureTextEntry
        onChangeText={(password) => setPassword(password)} /><FilledButton title={'Login'} style={styles.loginButton}  
        onPress={() => {password == "password" && username == "Username"? navigation.navigate('EmployeeHomeScreen') : <Text>Error on Password, plase try again</Text>}} /></>
  );
};

const styles = StyleSheet.create({
  title: {
    marginBottom: 48,
  },
  input: {
    marginVertical: 8,
  },
  loginButton: {
    marginVertical: 32,
  },

});
