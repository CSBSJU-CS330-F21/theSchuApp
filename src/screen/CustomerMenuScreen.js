import React from 'react';

import {View, StyleSheet, Text, Button} from 'react-native';



export default function CustomerMenuScreen({navigation}){ 
    return(
      <Text>This is the customer Page</Text>
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