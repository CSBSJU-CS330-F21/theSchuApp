import React from 'react';

import {View, StyleSheet, Text, Button} from 'react-native';
import { FilledButton } from '../components/FilledButton';
import {Input} from '../components/Input';



export default function LoginScreen({ navigation }) {
  return (
    <><Input
      style={styles.input}
      placeholder={'Username'} /><Input
        style={styles.input}
        placeholder={'Password'} secureTextEntry /><FilledButton title={'Login'} style={styles.loginButton}  onPress={() => navigation.navigate('EmployeeHomeScreen')} /></>
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
